import BlogSection from "../../Components/HomeCompo/BlogSection/BlogSection";
import Category from "../../Components/HomeCompo/Category/Category";
import Hero from "../../Components/HomeCompo/Hero/Hero";
import ServiceCard from "../../Components/HomeCompo/ServiceCard/ServiceCard";

const Home = () => {
    return (
        <div className="dark:bg-gray-800">
            <Hero></Hero>, 
            <ServiceCard></ServiceCard>,
            <Category></Category>,
            <BlogSection></BlogSection> 
        </div>
    );
};

export default Home;