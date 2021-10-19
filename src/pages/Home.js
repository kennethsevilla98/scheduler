import MeetingListComponent from "../component/MeetingListComponent";
import { useEffect, useState } from "react";
import Button from "../component/Button";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchInput from "../component/SearchInput";
import FilterButton from "../component/FilterButton";
import Header from "../component/Header";
import Footer from "../component/Footer";
import MainContainer from "../component/MainContainer";
import Container from "../component/Container";

function Home() {
  const meetings = useSelector((state) => state.meetings.data);
  const isLoading = useSelector((state) => state.meetings.isLoading);

  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [checked, setChecked] = useState([]);

  const history = useHistory();

  const clickCreate = () => {
    history.push("/create");
  };

  const onHandleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  console.log(checked);

  useEffect(() => {
    let filteredData;

    if (checked.length === 0) {
      filteredData = meetings;
    } else {
      filteredData = meetings.filter(
        (list) => checked.indexOf(list.status) !== -1
      );
    }
    setData(filteredData);
  }, [checked, meetings]);


  return (
    <Container>
      <Header>
        <div>
          <p className="text-3xl mb-2 mt-2 text-white">Calendar</p>
        </div>

        <div className="flex">
          <div className="flex-grow">
            <SearchInput onChange={onHandleSearch} />
          </div>
          <div className="flex-none pl-2 p-0">
            <FilterButton
              list={["Pending", "On-going", "Done"]}
              checked={checked}
              handleToggle={handleToggle}
            />
          </div>
        </div>
      </Header>

      <MainContainer>
        {isLoading ? (
          <div>loading...</div>
        ) : (
          data
            .filter((meeting) =>
              meeting.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((filteredMeeting) => (
              <MeetingListComponent
                meeting={filteredMeeting}
                key={filteredMeeting.id}
              />
            ))
        )}
      </MainContainer>

      <Footer>
        <Button label="Create" onClick={clickCreate} />
      </Footer>
    </Container>
  );
}

export default Home;
