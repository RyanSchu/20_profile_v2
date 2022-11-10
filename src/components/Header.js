import NavTabs from "./Navigation";

export default function Header({ currentPage, handlePageChange }) {
    return(
        <nav>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
        </nav>
    )
}