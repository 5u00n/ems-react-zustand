import { useSettingStore } from "../store/store";

const SideBar = () => {

    const sidebar = useSettingStore((state) => state.sidebar);
    return (
        <>
        {sidebar === "big" ? 
            <div className="left-0 hidden md:block ">
                <ul className="menu px-4 w-60 min-h-full bg-base-200 h-screen">
                    <li className="">
                        <a className="btn btn-ghost text-xl">daisyUI</a>
                    </li>
                    {/* Sidebar content here */}
                    <li><a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>

                        Item 1</a></li>
                    <li><a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                        Item 2
                    </a></li>
                    <li>
                        <details open>


                            <summary><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> Parent</summary>
                            <ul>
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                                <li>
                                    <details open>
                                        <summary>Parent</summary>
                                        <ul>
                                            <li><a>Submenu 1</a></li>
                                            <li><a>Submenu 2</a></li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>

                </ul>

            </div>:
            sidebar === "small" ?
            <div className="left-0 hidden md:block ">
                <ul className="menu px-4 w-16 min-h-full bg-base-200 h-screen">
                    <li className="">
                        <a className="btn btn-ghost text-xl">daisyUI</a>
                    </li>
                    {/* Sidebar content here */}
                    <li><a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>

                        Item 1</a></li>
                    <li><a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a

                        2 2 0 01-2-2z" /></svg>
                        Item 2
                    </a></li>
                    <li>
                </li>
                    <li><a>Item 3</a></li>

                </ul>
            </div>:
            <div className="left-0 hidden md:block ">
                mobile
            </div>
        }

        </>
    );


}

export default SideBar;