const Hero = () => {
  return (
    <div>
      <div className="mt-20 mb-6   sm:flex  justify-center items-center ">
        <img className=" w-auto h-96 mx-auto sm:mx-4 rounded-[70%]" src="src\assets\PROFILE PIC.jpeg" alt=""/>
        <div className= " ml-40 sm:ml-2 w-[40%]  ">
          <h1 className="text-indigo-800  font-sans font-semibold text-3xl">My name is Md Faizanuddin.</h1>
          <h3 className="my-2 text-xl text-indigo-700 font-medium">A little bit aout Me</h3>
          <p className=" text-indigo-500">I have completed BCA from Gulberga University
              in 2022, I am working on creating full stack
              ( Mern ) projects , and learnig softwear devlopment and system
               design skills.
              </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
