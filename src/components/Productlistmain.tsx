import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Productlist from "./Productlist";
import StatusFilter from "./StatusFilter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagination from "./Pagination";

const ContainerStyled = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: auto;
  padding: 0 20px;
`;

const productsForPage = (products: [], currentpage: number) => {
  const offset = (currentpage - 1) * 3;
  const newproducts = products.slice(offset, offset + 3);
  return newproducts;
};

const Productlistmain = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [currentproducts, setCurrentproducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentpage, setCurrentpage] = useState<number>(1);
  const [totalpages, setTotalpages] = useState<number>(1);
  const [totalproducts, setTotalproducts] = useState<number>(0);
  const [selectedFilter, setSelectedFilter] = useState("");

  const [productname, setProductname] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [colour, setColour] = useState("");
  const [productstatus, setProductstatus] = useState("");
  const [customerinitials, setCustomerinitials] = useState("");
  const [productimage, setProductimage] = useState("");
  const [formopen, setFormopen] = useState(false);
  const [searchresult, setSearchresult] = useState(false);

  let productFormdata = {
    productname: productname,
    category: category,
    size: size,
    colour: colour,
    productstatus: productstatus,
    customerinitials: customerinitials,
    productimage: productimage,
  };

  const setformvalues = {
    productname: setProductname,
    category: setCategory,
    size: setSize,
    colour: setColour,
    productstatus: setProductstatus,
    customerinitials: setCustomerinitials,
    productimage: productimage,
  };

  const handleProductCreate = () => {
    axios
      .post("/products/create", {
        product_name: productFormdata.productname,
        category: productFormdata.category,
        size: productFormdata.size,
        status: productFormdata.productstatus,
        colour: productFormdata.colour,
        customers_initials: productFormdata.customerinitials,
        product_image: productFormdata.productimage,
      })
      .then((res) => {
        handleInputsReset();
        notificationSuccess(res.data.message);
        fetchProducts();
      })
      .catch((error) =>
        notificationError(
          `There was an error creating the ${productFormdata.productname} book: ${error}`
        )
      );
  };

  const notificationSuccess = (msg: string) => {
    toast.success(msg, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const notificationError = (msg: string) => {
    toast.error(msg, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const notificationInfo = (msg: string) => {
    toast.info(msg, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const fetchProducts = async () => {
    axios
      .get("/products/all")
      .then((response) => {
        setProducts(response.data);
        const newproducts = productsForPage(response.data, currentpage);
        setCurrentproducts(newproducts);
        setTotalproducts(response.data.length);

        localStorage.setItem("productsdata", JSON.stringify(response));
        setLoading(false);
      })
      .catch((error) =>
        console.error(
          `There was an error retrieving the product list: ${error}`
        )
      );
  };

  const handleProductRemove = (id: number, productname: string) => {
    axios
      .put("/products/delete", { id: id })
      .then(() => {
        notificationInfo(`Product ${productname} removed.`);
        fetchProducts();
      })
      .catch((error) =>
        notificationError(
          `There was an error removing the product ${productname}: ${error}`
        )
      );
  };

  // handle selected status filter
  const handleStatusSelect = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      return;
    }

    let status = e.target.dataset.status || "";
    let products = JSON.parse(localStorage.getItem("productsdata") || "{}")
      .data;

    if (status === selectedFilter) {
      // selected again - unset filter
      setCurrentproducts(currentproducts);
      setSelectedFilter("");
      setSearchresult(false);
    } else {
      // new selection - set filter
      let filteredProducts = products.filter(function (product: any) {
        return product.status === status;
      });
      setCurrentpage(1);
      const newproducts = productsForPage(filteredProducts, currentpage);
      setTotalproducts(newproducts.length);
      setCurrentproducts(newproducts);
      setSelectedFilter(status);
      setSearchresult(true);
    }
  };

  const handleImageUpload = async (e: any) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ordericon_");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dfjm0x2k5/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setProductimage(file.secure_url);
  };

  const toggleForm = () => {
    setFormopen(!formopen);
  };

  const handleProductSubmit = () => {
    handleProductCreate();
  };

  const handleShowAllProducts = (e: React.SyntheticEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLDivElement)) {
      return;
    }
    setSearchresult(false);
    setSelectedFilter("");
    fetchProducts();
  };

  const handleInputsReset = () => {
    setProductname("");
    setProductstatus("");
    setSize("");
    setProductstatus("");
    setColour("");
    setCustomerinitials("");
    setCategory("");
    setProductimage("");
    setFormopen(false);
  };

  type pageChanged = {
    currentpage: number;
    totalpages: number;
    pagelimit: number;
  };

  const onPageChanged = ({
    currentpage,
    totalpages,
    pagelimit,
  }: pageChanged) => {
    const offset = (currentpage - 1) * pagelimit;

    const currentproducts = products.slice(offset, offset + pagelimit);

    setCurrentproducts(currentproducts);
    setTotalpages(totalpages);
    setCurrentpage(currentpage);
    return true;
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContainerStyled>
      <ToastContainer />
      <StatusFilter
        handleStatusSelect={handleStatusSelect}
        selectedFilter={selectedFilter}
      />
      <Productlist
        handleShowAllProducts={handleShowAllProducts}
        searchresult={searchresult}
        loading={loading}
        toggleForm={toggleForm}
        formopen={formopen}
        handleProductSubmit={handleProductSubmit}
        products={currentproducts}
        handleProductRemove={handleProductRemove}
        handleImageUpload={handleImageUpload}
        setformvalues={setformvalues}
        productformdata={productFormdata}
      />
      <Pagination
        totalRecords={totalproducts}
        pageLimit={3}
        pageNeighbours={1}
        currentpage={currentpage}
        onPageChanged={onPageChanged}
      />
    </ContainerStyled>
  );
};

export default Productlistmain;
