import { useState } from 'react';
import "../styles/Home.scss";

const Home: React.FC = () => {
  const [userInput, setUserInput] = useState<string>("");

  // temp data
  // let data : string[] = ['hello'];
  // let userTestStatus: { id: number, name: string }[] = [
  //   { "id": 0, "name": "Available" },
  //   { "id": 1, "name": "Ready" },
  //   { "id": 2, "name": "Started" }
  // ];
  // id:number, text:string, user:bool
  // let data : {id: number, text: string, isUser: boolean}[] = [];
  const [data, setData] = useState<{id: number, text: string, isUser: boolean}[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('userinput', userInput);

    let newData = {
      "id": data.length,
      "text": userInput,
      "isUser": true
    };
    setData([...data, newData]);
    setUserInput("");
    console.log("data", data);
  };

  return(
    <div className="chat-interface">
      <h1>Home</h1>
      <div className="message-box">
        <div className="messages"></div>
        <div className="user-textbox">
          <form onSubmit={handleSubmit}>
            <input
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Send a chat"
            />    
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;