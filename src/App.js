import './App.css';
import Instructions from './Instructions.js';


const emojis = [
  {
   emoji: "😀",
   name: "grinning face"
  },
  {
   emoji: "🎉",
   name: "party popper"
  },
  {
   emoji: "💃",
   name: "woman dancing"
  }
  ];

  function displayEmojiName (event){
    alert(event.target.id);
  }




function App() {
  const greeting = "Howdy";
  const displayAction = false; // hide paragraph when false but show <p> when true
  
    return (
      <div className="container">
       <h1 id={greeting}>Hello World</h1>
       {displayAction && <p>What are you looking at ?</p>}
       <Instructions />
         <ul>
          {
            emojis.map(emoji => (
              <li key={emoji.name}>
                  <button onClick={displayEmojiName}>
                    <span role='img' aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
                  </button>
              </li>
            ))
          }
         </ul>
      </div>
    );
}

export default App;




// eslint-disable-next-line no-lone-blocks
{/* <ul>
       <li>
         <button onClick={displayEmojiName}>
           <span role="img" aria-label="grinning face" id="grinning face">😀</span>
         </button>
       </li>
       <li>
         <button onClick={displayEmojiName}>
           <span  role="img" aria-label="party popper" id="party popper">🎉</span>
         </button>
       </li>
       <li>
         <button onClick={displayEmojiName}>
           <span role="img" aria-label="woman dancing" id="woman dancing">💃</span>
         </button>
       </li>
     </ul> */}