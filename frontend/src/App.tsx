import { useEffect, useState } from "react";
import Container from "@mui/material/Container";

import TextForm from './TextForm';
import TextList from './TextList';
import { getTexts } from "./actions";
import { TextsResponseType,TextArray } from "./types";


function App() {
  const [data, setData] = useState<TextArray>([]);
  const [listIsLoading, setListIsLoading] = useState<boolean>(false);

  const fetchList = async () => {
    setListIsLoading(true);
    try {
      const response: TextsResponseType = await getTexts();
      setData(response.texts);
    } catch (error) {
      console.error(error);
    } finally {
      setListIsLoading(false);
    }
  };

  useEffect(() => {
    fetchList();
  }, [])

  return (
      <div className="App">
        <Container maxWidth="md">
          <TextForm fetchList={fetchList}/>
          <TextList listIsLoading={listIsLoading} fetchData={fetchList} data={data}/>
        </Container>
      </div>
  );
}

export default App;
