
const ReadBook = () => {
   return (
     <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-4">
       <header className="text-center mb-8">
         <h1 className="text-3xl font-bold">Book Reading Habit</h1>
       </header>
       <main className="bg-white p-8 rounded-lg shadow-md flex">
         <div className="w-1/3 mr-8">
           <img
             src="https://i.ibb.co/kXnwg4j/pexels-oziel-g-mez-2846814.jpg"
             alt="Book Cover"
             className="w-full h-auto"
           />
         </div>
         <div className="flex-grow">
           <p className="mb-4">
             In the enchanting world of literature, the habit of reading acts as
             a magical portal, transporting readers to realms unknown and
             unlocking the doors to countless adventures. A persons reading
             habits are like a fingerprint, unique and personal, shaping ones
             perspective and nurturing the imagination. Whether its the
             comforting embrace of a well-worn novel or the excitement of
             exploring new genres, the habit
           </p>
           <p className="mb-4">
             The beauty of a reading habit lies not just in the act itself but
             in the transformative journey it initiates within the reader.
             Through the pages of a book, one can transcend time and space,
             immersing oneself in different cultures, historical epochs, and the
             diverse lives of characters who mirror our own humanity
           </p>
           <p>
             The evolution of a reading habit is a testament to personal growth
             and intellectual curiosity. From the first stumbling steps into the
             world of picture books to the sophisticated exploration of complex
             narratives, the reading habit matures alongside the reader.
           </p>
           {/* Add more paragraphs as needed */}
         </div>
       </main>
     </div>
   );
};

export default ReadBook;