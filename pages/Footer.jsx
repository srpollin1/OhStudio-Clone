const Footer = () => {
    return (
        <footer>
            <div className="w-full p-4 flex-1 flex items-center justify-center gap-10 rounded-lg text-[#000000]">
                <div className="flex-1 text-xs">
                    <h1>© Oli Harris 2023</h1>
                </div>
                <div className="text-[#ffffff] bg-[#000000] text-center text-xs leading-normal py-2 w-16 fixed bottom-5 rounded-2xl">
                    <a>Shop</a>
                </div>
                <div className="">
                    <div className="gap-10 flex rounded-2xl leading-10 text-xs">
                        <a href="">Instagram</a>
                        <a href="">Linkedin</a>
                        <a href="">Mail</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer