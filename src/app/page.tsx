import JobBarComponent from "@/Components/JobBarComponent";


export default function Home() {
  return (
   <div className="flex flex-col items-center min-h-screen  bg-[#1b232b]">
      
    <h2 className="text-[40px] mt-5 mb-5">My Top 5 jobs I wanna work in</h2>


 

    <JobBarComponent  
    background="red-500"
    imageOnRight={false}
    LogoUrl="./ValveLogo.png"
    LogoSize="w-[100px] h-[30px]"
    Description="I love valve and videogames and I think that valve is really goof at making games and i wanna woek there"
    textColor="text-black"
    ButtonColor="bg-gradian-to-r from-blue-500 to-blue-700"
    cardTitle="Valve"
    cardImageUrl="./valvecorplogo.png"
    cardVideoUrl="./Valve1998intro.mp4"
    cardAudioUrl="./Valve-Hazardous.mp3"/>


   </div>
  );
}
