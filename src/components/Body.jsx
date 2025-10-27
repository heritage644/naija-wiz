

/*export default function Body ({name,paragraph, ech2 }) {
return (
<main>
    <h1 className="first">
        my name is {name}
    </h1 >
    <p>{paragraph}</p>
    <h2>{ech2}</h2>
</main>


)



}
export default function Body (prop) {
return (

    <main>
<p> {prop.name} </p>
<hr />
<p>{prop.punchline}</p>
<hr />
<p>{prop.response}</p>
</main>
)

}


export default   [
  {
    id: 1,
    title: "Getting Started with React",
    summary: "Learn the basics of React and how to create your first app.",
    author: "Jane Doe",
    date: "August 2, 2025",
    image: {
        src :"https://source.unsplash.com/600x400/?react,code",
         alt : "mount fuji"
    }
  },
  {
    id: 2,
    title: "Tailwind CSS for Beginners",
    summary: "A guide to using Tailwind CSS with React projects.",
    author: "John Smith",
    date: "August 1, 2025",
    image:{
        src : "https://source.unsplash.com/600x400/?tailwindcss,design",
         alt : "mount fuji"
    }

  },
  {
    id: 3,
    title: "Understanding React Hooks",
    summary: "Explore useState, useEffect, and other powerful React hooks.",
    author: "Sara Lee",
    date: "July 30, 2025",
    image: { 
        src :"https://source.unsplash.com/600x400/?hooks,developer",
        alt : "mount fuji"
    },

  },
   {
    id: 4,
    title: "Getting Started with Typescript",
    summary: "Learn the basics of React and how to create your first app.",
    author: "Jane don",
    date: "August 2, 2025",
    image: {
        src :"https://source.unsplash.com/600x400/?react,code",
         alt : "mount fuji"
    }
  },
  {
    id: 5,
    title: "Bootstap CSS for Beginners",
    summary: "A guide to using Tailwind CSS with React projects.",
    author: "John Smith",
    date: "August 1, 2028",
    image: {
        src: "https://source.unsplash.com/600x400/?tailwindcss,design",
         alt : "mount fuji"
    },
  },
  {
    id: 6,
    title: "Understanding React Hooks",
    summary: "Explore useState, useEffect, and other powerful React hooks.",
    author: "Sara Lee",
    date: "July 30, 2025",
    image: {
        src:"https://source.unsplash.com/600x400/?hooks,developer",
         alt : "mount fuji"
    },
  },
   {
    id: 7,
    title: "Getting Started with React",
    summary: "Learn the basics of React and how to create your first app.",
    author: "Jane Doe",
    date: "August 2, 2025",
    image: {
        src :"https://source.unsplash.com/600x400/?react,code",
         alt : "mount fuji"
    }
  },
  {
    id: 8,
    title: "Tailwind CSS for Beginners",
    summary: "A guide to using Tailwind CSS with React projects.",
    author: "John Smith",
    date: "August 1, 2025",
    image:{ 
        src:"https://source.unsplash.com/600x400/?tailwindcss,design",
         alt : "mount fuji"
    }
  },
  {
    id: 9,
    title: "Understanding React Hooks",
    summary: "Explore useState, useEffect, and other powerful React hooks.",
    author: "Sara Lee",
    date: "July 30, 2025",
    image: {
        src :"https://source.unsplash.com/600x400/?hooks,developer",
         alt : "mount fuji"
    }
  },

];

// src/components/PostPage.jsx
export default  [
  {
    id: 1,
    title: "Getting Started with React",
    summary: "Learn the basics of React and how to create your first app.",
    author: "Jane Doe",
    date: "August 2, 2025",
    content: "This is the full content for Getting Started with React.",
  },
  {
    id: 2,
    title: "Tailwind CSS for Beginners",
    summary: "A guide to using Tailwind CSS with React projects.",
    author: "John Smith",
    date: "August 1, 2025",
    content: "Tailwind CSS is a utility-first CSS framework for rapidly building UIs.",
  },
  {
    id: 3,
    title: "Understanding React Hooks",
    summary: "Explore useState, useEffect, and other powerful React hooks.",
    author: "Sara Lee",
    date: "July 30, 2025",
    content: "React Hooks are functions that let you use state and lifecycle features in functional components.",
  },
    {
    id: 4,
    title: "Getting Started with React",
    summary: "Learn the basics of React and how to create your first app.",
    author: "Jane Doe",
    date: "August 2, 2025",
    content: "This is the full content for Getting Started with React.",
  },
  {
    id: 5,
    title: "Tailwind CSS for Beginners",
    summary: "A guide to using Tailwind CSS with React projects.",
    author: "John Smith",
    date: "August 1, 2025",
    content: "Tailwind CSS is a utility-first CSS framework for rapidly building UIs.",
  },
  {
    id: 6,
    title: "Understanding React Hooks",
    summary: "Explore useState, useEffect, and other powerful React hooks.",
    author: "Sara Lee",
    date: "July 30, 2025",
    content: "React Hooks are functions that let you use state and lifecycle features in functional components.",
  },
]; */


export default function Body ({ handleSubmit }){

return (
        <main>
            <form onSubmit={handleSubmit} className="second">
                <input 
                    aria-label="Add Ingredients"
                    placeholder="e.g. oregano"
                    type="text"
                    name="ingredient"
                    required
                />
                <button type="submit">+ Add Ingredients</button>
            </form>
        </main>
    )
}
    

