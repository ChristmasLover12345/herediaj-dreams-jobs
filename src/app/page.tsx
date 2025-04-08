import JobCardComponent from "@/Components/JobCardComponent";

export default function Home() {
  return (
   <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#1b232b]">
      
    <JobCardComponent title="Valve" videoUrl="./Valve1998intro.mp4" imageUrl="./valvecorplogo.png" audioUrl="./Valve-Hazardous.mp3" />

   </div>
  );
}
