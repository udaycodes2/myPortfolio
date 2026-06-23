import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1>hello</h1> */}
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />

        <Route path="*" element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
