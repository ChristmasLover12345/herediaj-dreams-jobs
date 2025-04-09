import JobBarComponent from "@/Components/JobBarComponent";


export default function Home() {
  return (
   <div className="flex flex-col items-center min-w-screen min-h-screen bg-[#1b232b]">
      
    <h2 className="text-[40px] mt-5 mb-5 bg-g">My Top 5 jobs I wanna work in</h2>


 

    <JobBarComponent  
    background="bg-red-500"
    imageOnRight={false}
    LogoUrl="./images/ValveLogo.png"
    LogoSize="w-[100px] h-[30px]"
    Description="I love valve and videogames and I think that valve is really goof at making games and i wanna woek there"
    textColor="text-black"
    ButtonColor="bg-red-900 hover:bg-red-700"
    cardTitle="Valve"
    cardImageUrl="./images/valvecorplogo.png"
    cardVideoUrl="./videos/Valve1998intro.mp4"
    cardAudioUrl="./audios/Valve-Hazardous.mp3"/>

    
<JobBarComponent  
    background="bg-gray-900"
    imageOnRight={true}
    LogoUrl="./images/FacepunchLight.png"
    LogoSize="w-[100px] h-[35px]"
    Description="I love facepunch and videogames and I think that valve is really goof at making games and i wanna woek there"
    textColor="text-white"
    ButtonColor="gray-800 hover:bg-gray-700"
    cardTitle="Facepunch"
    cardImageUrl="./images/Facepunch hero.png"
    cardVideoUrl="./videos/FacepunchOfficeTour.mp4"
    cardAudioUrl="./audios/RustFishVillgae.mp3"/>

   </div>
  );
}
