import Satellites from "./Satellites";
import Project from "./Project/Project.jsx";

function FirstPhase({ position = [0, 0, 0], mobile = false }) {
  return (
    <>
      <group position={position}>
        <Satellites mobile={true} />
        <Project
          position={[mobile ? 0 : -5, 0, -10]}
          radius={1.5}
          projectName="Solar System"
          projectDescription="First project I made using three js library. Simple but cool.  learnt three js basics with this project. Planets movement is based on realistic movements (closer to the sun moves faster)"
          projectImage="solarSystem.png"
          projectLink="https://solarsysytembyzyad.vercel.app/"
          planet="moon.jpg"
          skills={[
            {
              logo: "csslogo",
              position: [0, 0, 1],
              rotation: [0, 0, 0],
              radius: 2,
              offset: 0,
            },
            {
              logo: "jslogo",
              position: [1, 0, 0],
              rotation: [0, 0, 0],
              radius: 2,
              offset: 1.5,
            },
            {
              logo: "threelogo",
              position: [1, 0, 1],
              rotation: [0, 0, 0],
              radius: 2,
              offset: 3,
            },
            {
              logo: "htmllogo",
              position: [0, 0, 0],
              rotation: [0, 0, 0],
              radius: 2,
              offset: 4.5,
            },
          ]}
        />
        <Project
          position={[mobile ? 0 : 5, 8, -10]}
          radius={1.5}
          projectName="Porsche 911"
          projectDescription="A scroll based animation page that can be used to show off fancy products like the Porsche 911 car. This app helped me improve my maths skills so I could make the animation as smooth as possible."
          projectImage="porsche911photoweb.png"
          projectLink="https://porsche911byzyad.vercel.app/"
          planet="mars.png"
          skills={[
            {
              logo: "csslogo",
              position: [0, 0, 1],
              rotation: [0, 0, 0],
              radius: 2,
              offset: 0,
            },
            {
              logo: "jslogo",
              position: [1, 0, 0],
              rotation: [0, 0, 0],
              radius: 2,
              offset: 1.5,
            },
            {
              logo: "threelogo",
              position: [1, 0, 1],
              rotation: [0, 0, 0],
              radius: 2,
              offset: 3,
            },
            {
              logo: "htmllogo",
              position: [0, 0, 0],
              rotation: [0, 0, 0],
              radius: 2,
              offset: 4.5,
            },
          ]}
        />
        <Project
          position={[mobile ? 0 : -5, 16, -10]}
          radius={1.5}
          projectName="Where to watch this"
          projectDescription="Where to watch this is an app where the user enters a tv show / movie title and it shows them the streaming services that has this title. simple but useful and I used watch mode api for this app"
          projectImage="wheretowatchthisapp.png"
          projectLink="https://wheretowatchthis.vercel.app/"
          planet="jupiter.jpg"
          skills={[
            {
              logo: "csslogo",
              position: [0, 0, 1],
              rotation: [0, 0, 0],
              radius: 2,
              offset: 0,
            },
            {
              logo: "reactlogo",
              position: [1, 0, 0],
              rotation: [0, 0, 0],
              radius: 2,
              offset: 1.5,
            },
            {
              logo: "expressjslogo",
              position: [1, 0, 1],
              rotation: [0, 0, 0],
              radius: 2,
              offset: 3,
            },
            {
              logo: "htmllogo",
              position: [0, 0, 0],
              rotation: [0, 0, 0],
              radius: 2,
              offset: 4.5,
            },
          ]}
        />
        <Project
          position={[mobile ? 0 : 5, 24, -10]}
          radius={1.5}
          projectName="Book Buddy"
          projectDescription="I read books frequently, and sometimes I come across words I don’t understand. Even if I check the dictionary, it’s only a
matter of time before I forget their meanings again. Book-Buddy saves the definitions for you and classifies them by book,
allowing you to review the words whenever you want. "
          projectImage="book-buddy.png"
          projectLink="https://book-buddy-lovat.vercel.app/"
          planet="uranus.jpg"
          skills={[
            {
              logo: "csslogo",
              position: [0, 0, 1],
              rotation: [0, 0, 0],
              radius: 2,
              offset: 0,
            },
            {
              logo: "reactlogo",
              position: [1, 0, 0],
              rotation: [0, 0, 0],
              radius: 2,
              offset: 1.5,
            },
            {
              logo: "threelogo",
              position: [1, 0, 1],
              rotation: [0, 0, 0],
              radius: 2,
              offset: 3,
            },
            {
              logo: "expressjslogo",
              position: [0, 0, 0],
              rotation: [0, 0, 0],
              radius: 2,
              offset: 4.5,
            },
          ]}
        />
      </group>
    </>
  );
}

export default FirstPhase;
