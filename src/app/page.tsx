import JobBarComponent from "@/Components/JobBarComponent";



export default function Home() {
  return (
   <div className="flex flex-col items-center min-w-screen max-w-screen min-h-screen bg-[#1b232b] ">
      
    {/* ADD A HERO IMAGE OR SOMETHING, THE TITTLE LOOKS TOO DRY */}

    <div className="relative  h-[400px] w-full flex items-center justify-center">

    <img src="./images/guy.jpg" alt="Hero" className="absolute inset-0  w-full h-full opacity-50" />

    <h2 className=" text-[25px] md:text-[40px] text-center text-white font-bold bg-black/50 px-6 py-4 rounded-xl backdrop-blur-sm">
    My Top 5 Jobs I Wanna Work In
    </h2>
    </div>

 
    {/* Vavle */}
  <JobBarComponent  
    background="bg-red-500"
    imageOnRight={false}
    LogoUrl="./images/ValveLogo.png"
    LogoSize="w-[100px] h-[30px]"
    Description="I love valve and their videogames, ever since I was a kid i've heard nothing but praise for them, and after getting my own computer and finally trying out steam and their catalog, It's definetly the place I want to end up in"
    textColor="text-black"
    ButtonColor="bg-red-800 hover:bg-red-700"
    cardTitle="Valve"
    cardImageUrl="./images/valvecorplogo.png"
    cardVideoUrl="./videos/Valve1998intro.mp4"
    cardAudioUrl="./audios/Valve-Hazardous.mp3"
    CompanyLink="https://www.valvesoftware.com/en/"
    LearnMoreUrl="/Valve"/>

    {/* Facepunch */}
  <JobBarComponent  
    background="bg-gray-900"
    imageOnRight={true}
    LogoUrl="./images/FacepunchLight.png"
    LogoSize="w-[100px] h-[35px]"
    Description="Facepunch is a game development company mainly known for their game Rust and Garry's Mod, both of which i've played to great extent. And after learning about their new upcoming game/game engine called S&box, I really want to be part of the team that makes it happen"
    textColor="text-white"
    ButtonColor="gray-800 hover:bg-gray-700"
    cardTitle="Facepunch"
    cardImageUrl="./images/Facepunch hero.png"
    cardVideoUrl="./videos/FacepunchOfficeTour.mp4"
    cardAudioUrl="./audios/RustFishVillgae.mp3"
    CompanyLink="https://facepunch.com"
    LearnMoreUrl="/Facepunch"/>

    {/* Nvidia */}
  <JobBarComponent  
    background="bg-[#76b900]"
    imageOnRight={false}
    LogoUrl="./images/nvidia logo.png"
    LogoSize="w-[48px] h-[38px]"
    Description="Though I don't have a lot of experience with their products, I do know that they are the best in the market when it comes to graphics cards and AI, they also give pay a crap ton so yeah, I want to work there"
    textColor="text-black"
    ButtonColor=" hover:bg-lime-600"
    cardTitle="NVIDIA"
    cardImageUrl="./images/Gforce.jpeg"
    cardVideoUrl="./videos/nvidia3dAnimation.mp4"
    cardAudioUrl="./audios/GForceAudio.mp3"
    CompanyLink="https://www.nvidia.com/en-us/"
    LearnMoreUrl="/Nvidia"/>

    {/* unity? */}
  <JobBarComponent  
    background="bg-black"
    imageOnRight={true}
    LogoUrl="./images/Unity-Emblem.png"
    LogoSize="w-[100px] h-[40px]"
    Description="Unity is a game engine that has allowed a lot of indie developers to make their dreams come true, and I want to be one of the people that helps them achieve that"
    textColor="text-white"
    ButtonColor=" hover:bg-gray-700"
    cardTitle="Unity"
    cardImageUrl="./images/09_2023_Blog_Hero_image_Penguin_Option_3__1230x410_.webp"
    cardVideoUrl="./videos/unityVideo.mp4"
    cardAudioUrl="./audios/UnityAudio.mp3"
    CompanyLink="https://unity.com"
    LearnMoreUrl="/Unity"/>


  <JobBarComponent  
    background="bg-gray-900"
    imageOnRight={false}
    LogoUrl="./images/robloxLogoCard.webp"
    LogoSize="w-[48px] h-[48px]"
    Description="Roblos is a game engine that has allowed a lof of fantastic games to be made, games that i still play to this day. I want to be part of the team that makes it esaier for developers to make their dreams come true"
    textColor="text-white"
    ButtonColor="gray-800 hover:bg-gray-700"
    cardTitle="Roblox"
    cardImageUrl="./images/RobloxShowcase.webp"
    cardVideoUrl="./videos/RobloxVideo.mp4"
    cardAudioUrl="./audios/rovlox audio.mp3"
    CompanyLink="https://corp.roblox.com"
    LearnMoreUrl="/Roblox"/>

   </div>
  );
}
