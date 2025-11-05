import Image from "next/image";
import Button from "@/app/Components/Button";
import thumb from "@/public/image/img.jpg";
const page = () => {
    return (
    <main>
    <div>This is mission page</div>
     
     <div className="w-[400px]">
     <Image placeholder="blur" src={thumb} alt="Thumb" />
     </div>
     <Button/>
    </main>
    );
};

export default page;