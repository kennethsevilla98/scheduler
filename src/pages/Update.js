import React, { useEffect } from "react";
import Button from "../component/Button";
import { useState } from "react";
import { useHistory } from "react-router";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import Textfield from "../component/Textfield";
import DateField from "../component/DateField";
import Dropdown from "../component/Dropdown";
import Modal from "../component/Modal";
import Container from "../component/Container";
import Header from "../component/Header";
import MainContainer from "../component/MainContainer";
import Footer from "../component/Footer";

function Update() {
  const { id } = useParams();
  const history = useHistory();

  const meetings = useSelector((state) => state.meetings.data);
  const dispatch = useDispatch();
  const { deleteMeeting, updateMeeting } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const meeting = meetings.filter((list) => list.id === parseInt(id));

  const [title, setTitle] = useState("");
  const [dateMeeting, setDateMeeting] = useState(new Date());
  const [status, setStatus] = useState("Pending");
  const [openSave, setOpenSave] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  useEffect(() => {
    if (meeting.length > 0) {
      setTitle(meeting[0].title);
      setStatus(meeting[0].status);
      setDateMeeting(new Date(meeting[0].date));
    }
  }, [meetings]);

  const onClickAcceptDelete = () => {
    deleteMeeting(id);
    history.push("/");
  };

  const onClickAcceptSave = () => {
    updateMeeting(id, title, status, dateMeeting);
    history.push("/");
  };

  const onSelectedStatus = (e) => {
    setStatus(e.target.value);
  };

  console.log(id);
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
          <h3 className="text-center text-3xl text-white">Update</h3>
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
        <Button
          label="Save"
          onClick={() => {
            setOpenSave(true);
          }}
        />
        <Button
          label="Delete"
          onClick={() => {
            setOpenDelete(true);
          }}
          color="bg-red-400"
        />
      </Footer>

      <Modal
        open={openSave}
        setOpen={setOpenSave}
        title="Save updates."
        text="Are you sure you want to save updates?"
        onAccept={onClickAcceptSave}
        onCancel={() => setOpenSave(false)}
        onAcceptLabel="Save"
        onCancelLabel="Cancel"
        onAcceptColor="bg-green-400"
        onAcceptHoverColor="bg-green-600"
      />
      <Modal
        open={openDelete}
        setOpen={setOpenDelete}
        title="Delete Meeting"
        text="Are you sure you want to delete this meetings?"
        onAccept={onClickAcceptDelete}
        onCancel={() => setOpenDelete(false)}
        onAcceptLabel="Delete"
        onCancelLabel="Cancel"
        onAcceptColor="bg-red-400"
        onAcceptHoverColor="bg-red-600"
      />
    </Container>
  );
}

export default Update;
