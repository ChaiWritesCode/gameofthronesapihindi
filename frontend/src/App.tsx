/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect,useState} from 'react';
import  Linkedin from "./assets/linkedin.svg?react";
import X from './assets/x.svg?react';
import Github from './assets/github.svg?react';
interface DialogProps{
  id:number,
  character:string,
  sentence:string
}
interface HouseProps {
  id:number;
  house:string,
  houses:Record<string,any>
}
interface CharacterProps {
  id:number;
  name:string,
  details:Record<string,any>
}
function App() {
  const [singleQuote,setSingleQuote] = useState<Array<DialogProps>>([{
    id:0,
    character:'',
    sentence:''
  }])
 
  useEffect(() => {
    axios
    .get(import.meta.env.VITE_ONEDIALOG_LINK)
    .then(res => setSingleQuote(res.data))
    .catch(err => alert(err.message))
  },[])


  return (
    <div>
      <div className="mt-4 mb-2">
        <h1 className="text-4xl font-bold text-center tracking-widest text-highlight-color font-logo">
          Game of Thrones API in Hindi
        </h1>
        <p
          className="text-xl font-normal 
             text-highlight-color font-main text-center "
        >
          A free API to retrieve some quotes of Game of Thrones!
        </p>
      </div>
      {/* quotes */}
      <div className="mt-[3%] w-[90%] h-10 mb-12">
        {singleQuote.map((onequote) => (
          <div
            key={onequote.id}
            className="flex flex-row justify-center items-center gap-1 ml-[2%]"
          >
            <h2 className="font-main text-3xl text-highlight-color mb-2">
              {onequote.sentence}
            </h2>
            <p className="text-xl text-other-color">{`-${onequote.character}`}</p>
          </div>
        ))}
      </div>
      {/* Usage of the API */}
      <div className="">
        <h1 className="ml-[2%] text-3xl font-main text-primary-color bg-other-color w-[100px] rounded-l-[15px] text-center p-2">
          Usage
        </h1>
        {/* Quotes */}
        <div>
          <h4 className="ml-[5%] mt-5 text-[2rem] font-main text-other-color mb-2">
            {" "}
            &gt; Quotes{" "}
          </h4>

          <div className="flex flex-col justify-center items-center gap-4">
            <OneRandom />
            <FiveRandom />
            <CharacterQuote />
          </div>
        </div>
        {/* Characters */}
        <div>
          <h4 className="ml-[5%] mt-5 text-[2rem] font-main text-other-color mb-2">
            {" "}
            &gt; Characters{" "}
          </h4>
          <div className="flex flex-col justify-center items-center gap-4">
            <OneCharacter />
          </div>
        </div>
        <div>
          <h4 className="ml-[5%] mt-5 text-[2rem] font-main text-other-color mb-2">
            {" "}
            &gt; House{" "}
          </h4>
          <div className="flex flex-col justify-center items-center gap-4">
            <OneHouse />
          </div>
        </div>
        <div className="mt-[3%]">
          <h1 className="ml-[3%] text-3xl font-main text-primary-color
           bg-other-color w-[250px] rounded-l-[15px] text-center p-2">
            Documentation
          </h1>
          <p className="text-xl text-other-color font-main text-center mt-2">
            The complete API documentation on the Github Repo!. For Further help
            read readme.md file in Repo
          </p>
        </div>
        <div className="mt-[3%] flex flex-row justify-center items-center gap-4 p-2">
          <a href="https://www.linkedin.com/in/chaiwritescode" target="_blank" rel="noopener noreferrer">
        <Linkedin className="size-7 fill-other-color" />

          </a>
          <a href="https://www.twitter.com/chaiwritescode" target="_blank" rel="noopener noreferrer">
        <X className="size-7 fill-other-color" />
          </a>
          <a href="https://www.github.com/chaiwritescode" target="_blank" rel="noopener noreferrer">
        <Github className="size-7 fill-other-color" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
// single random quote
const OneRandom: React.FC = () => {
  const [oneDialog, setOneDialog] = useState<DialogProps>({
    id: 0,
    character: "",
    sentence: "",
  });
  const [oneError,setOneError] = useState<any>(null)
  const handleOneDialog = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_ONEDIALOG_LINK);
      setOneDialog(response.data);
    } catch (error) {
      setOneError(error)
    }
  };
  return (
    <div className="w-[50%] bg-secondary-accent h-43 p-2  rounded-[20px]">
      <div className="p-2 flex justify-between items-center gap-2">
        <h1 className="text-other-color font-main text-xl">
          &gt; Get a random quote
        </h1>
        {
          oneError === null ? (        <button
            className="text-other-color font-main text-xl"
            onClick={handleOneDialog}
          >
            Randomiser
          </button>) : <div className="loading"></div>
        }
      </div>
      <div className="p-2 mt-4 bg-other-color rounded-md">
        <div className="flex flex-row justify-between items-center gap-2">
          <h5 className="bg-primary-color p-1 rounded-sm text-other-color font-main text-[12px]">
            Get
          </h5>
          <p className="font-main text-primary-color text-[16pxs]">
            {import.meta.env.VITE_ONEDIALOG_LINK}
          </p>
        </div>
        <hr className="mt-2 bg-primary-color h-1" />
        {oneDialog.id !== 0 ? (
          <code>{JSON.stringify(oneDialog)}</code>
        ) : ""}
      </div>
    </div>
  );
};
// five random quotes
const FiveRandom: React.FC = () => {
  const [fiveError,setFiveError] = useState<any>(null)

  const [fiveDialog, setFiveDialog] = useState<DialogProps>({
    id: 0,
    character: "",
    sentence: "",
  });

  const handleFiveDialog = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_FIVEDIALOG_LINK);
      setFiveDialog(response.data);
    } catch (error) {
      setFiveError(error);
    }
  };
  return (
    <div className="w-[50%] bg-secondary-accent h-43 p-2  rounded-[20px]">
      <div className="p-2 flex justify-between items-center gap-2">
        <h1 className="text-other-color font-main text-xl">
          &gt; Get a random five quote
        </h1>
      {
        fiveError === null ? (  <button
          className="text-other-color font-main text-xl"
          onClick={handleFiveDialog}
        >
          Randomiser
        </button>) : <div className="loading"></div>
      }
      </div>
      <div className="p-2 mt-4 bg-other-color rounded-md">
        <div className="flex flex-row justify-between items-center gap-2">
          <h5 className="bg-primary-color p-1 rounded-sm text-other-color font-main text-[12px]">
            Get
          </h5>
          <p className="font-main text-primary-color text-[16pxs]">
            {import.meta.env.VITE_FIVEDIALOG_LINK}
          </p>
        </div>
        <hr className="mt-2 bg-primary-color h-1" />

        {fiveDialog.id !== 0 ? <code>{JSON.stringify(fiveDialog)}</code> : ""}
      </div>
    </div>
  );
};
// Characters Quotes
const CharacterQuote: React.FC = () => {
  const [characterQuotes, setcharacterQuotes] = useState<DialogProps>({
    id: 0,
    character: "",
    sentence: "",
  });

  const [characterError,setCharacterError] = useState<any>(null)

  const handleCharacterDialog = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_CHARADIALOG_LINK);
      setcharacterQuotes(response.data);
    } catch (error) {
     setCharacterError(error)
    }
  };
  return (
    <div className="w-[50%] bg-secondary-accent h-43 p-2  rounded-[20px]">
      <div className="p-2 flex justify-between items-center gap-2">
        <h1 className="text-other-color font-main text-xl">
          &gt; Get a quote from favorite character
        </h1>
         {
          characterError === null ? (   <button
            className="text-other-color font-main text-xl"
            onClick={handleCharacterDialog}
          >
            Randomiser
          </button>     ) : <div className="loading"></div>
        }
      </div>
      <div className="p-2 mt-4 bg-other-color rounded-md">
        <div className="flex flex-row justify-between items-center gap-2">
          <h5 className="bg-primary-color p-1 rounded-sm text-other-color font-main text-[12px]">
            Get
          </h5>
          <p className="font-main text-primary-color text-[16pxs]">
            {import.meta.env.VITE_CHARADIALOG_LINK}
          </p>
        </div>
        <hr className="mt-2 bg-primary-color h-1" />

        {characterQuotes.id !== 0 ? (
          <code>{JSON.stringify(characterQuotes)}</code>
        ) : ""}
      </div>
    </div>
  );
};
// Random Characters with full name and house name
const OneCharacter: React.FC = () => {
  const [oneCharacter, setOneCharacter] = useState<CharacterProps>({
    id: 0,
    name: "",
    details: {},
  });
  const [roleError,setRoleError] = useState<any>(null)
  const handleOneCharacter = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_CHARACTER_LINK);
      setOneCharacter(response.data);
    } catch (error) {
     setRoleError(error);
    }
  };
  return (
    <div className="w-[50%] bg-secondary-accent h-43 p-2  rounded-[20px]">
      <div className="p-2 flex justify-between items-center gap-2">
        <h1 className="text-other-color font-main text-xl">
          &gt; Get a random character
        </h1>
         {
          roleError === null ? (   <button
            className="text-other-color font-main text-xl"
            onClick={handleOneCharacter}
          >
            Randomiser
          </button>   ) : <div className="loading"></div>
        }
      </div>
      <div className="p-2 mt-4 bg-other-color rounded-md">
        <div className="flex flex-row justify-between items-center gap-2">
          <h5 className="bg-primary-color p-1 rounded-sm text-other-color font-main text-[12px]">
            Get
          </h5>
          <p className="font-main text-primary-color text-[16pxs]">
            {import.meta.env.VITE_CHARACTER_LINK}
          </p>
        </div>
        <hr className="mt-2 bg-primary-color h-1" />
        {oneCharacter.id !== 0 ? (
          <code>{JSON.stringify(oneCharacter)}</code>
        ) : ""}
      </div>
    </div>
  );
};
// random house
const OneHouse: React.FC = () => {
  const [oneHouse, setOneHouse] = useState<HouseProps>({
    id: 0,
    house: "",
    houses: {},
  });
  const [houseError,setHouseError] = useState<any>(null);
  const handleOneHouse = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_HOUSE_LINK);
      setOneHouse(response.data);
    } catch (error) {
      setHouseError(error);
    }
  };
  return (
    <div className="w-[50%] bg-secondary-accent h-43 p-2  rounded-[20px]">
      <div className="p-2 flex justify-between items-center gap-2">
        <h1 className="text-other-color font-main text-xl">
          &gt; Get a Random House{" "}
        </h1>
{
          houseError === null ? (<button
            className="text-other-color font-main text-xl"
            onClick={handleOneHouse}
          >
            Randomiser
          </button>   ) : <div className="loading"></div>
        }
      </div>
      <div className="p-2 mt-4 bg-other-color rounded-md">
        <div className="flex flex-row justify-between items-center gap-2">
          <h5 className="bg-primary-color p-1 rounded-sm text-other-color font-main text-[12px]">
            Get
          </h5>
          <p className="font-main text-primary-color text-[16pxs]">
            {import.meta.env.VITE_HOUSE_LINK}
          </p>
        </div>
        <hr className="mt-2 bg-primary-color h-1" />

        {oneHouse.id !== 0 ? <code>{JSON.stringify(oneHouse)}</code> : ""}
      </div>
    </div>
  );
};