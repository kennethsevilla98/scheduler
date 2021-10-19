import React from "react";
import Button from "../component/Button";
import { useState } from "react";
import { useHistory } from "react-router";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import Textfield from "../component/Textfield";
import DateField from "../component/DateField";
import Dropdown from "../component/Dropdown";
import Container from "../component/Container";
import Header from "../component/Header";
import MainContainer from "../component/MainContainer";
import Footer from "../component/Footer";

function Create() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [dateMeeting, setDateMeeting] = useState("");
  const [status, setStatus] = useState("Pending");

  const dispatch = useDispatch();
  const { postMeeting } = bindActionCreators(actionCreators, dispatch);

  const onSelectedStatus = (e) => {
    setStatus(e.target.value);
  };

  const onClickAdd = () => {
    postMeeting(title, status, dateMeeting);
    history.push("/");
  };

  console.log(status);

  return (
    <Container>
      <Header>
        <div className="sm: p-2 md:p-6 flow-root">
          <button
            className="float-left text-white p-2"
            onClick={() => {
              history.push("/");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>

          <h3 className="text-center text-3xl text-white">Create</h3>
        </div>
      </Header>

      <MainContainer>
        <Textfield
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          label="Meeting Title"
        />
        <DateField
          label="Date"
          selected={dateMeeting}
          onChange={(date) => setDateMeeting(date)}
        />
        <Dropdown
          label="Status"
          value={status}
          selected={status}
          onChange={onSelectedStatus}
          option={["Pending", "On-going", "Done"]}
        />
      </MainContainer>

      <Footer>
        <Button label="Add" onClick={onClickAdd} />
      </Footer>
    </Container>
  );
}

export default Create;
