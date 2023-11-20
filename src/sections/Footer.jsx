
const Footer = () => {
  return (
    <footer>
      <div className=" bg-blue-200">
        <div>
          <ul className="flex justify-center gap-6 py-6 font-medium text-blue-600">
            <li  className="cursor-pointer">
              <a href="https://www.linkedin.com/in/md-faizan-uddin-084699296">LinkedIn</a>
            </li>
            <li  className="cursor-pointer">
              <a href="https://github.com/MdFaizanuddin1">gitHub</a>
            </li>
            <li  className="cursor-pointer">
              <a href="mailto:md18faizan@gmail.com" target="">email</a>  
            </li>
          </ul>
          <p className="text-center text-blue-600 pb-4">© Md Faizanuddin</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer