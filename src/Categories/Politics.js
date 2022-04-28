import BlogList from "../BlogList";
import useFetch from "../useFetch";

const Politics = () => {
    const {data:blogs, isPending,error}=useFetch("https://blogvesit.herokuapp.com//blog/");

    return ( 
        <div className="politics">
            
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs.filter((blog)=>blog.category==="Politics")} title="Politics" />}
        </div>
        
     );
}
 
export default Politics;
