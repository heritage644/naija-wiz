
export default function Body ({ handleSubmit }){

return (
        <main>
            <form onSubmit={handleSubmit} className="second">
                <input 
                    aria-label="Add Ingredients"
                    placeholder="e.g. Yam"
                    type="text"
                    name="ingredient"
                    required
                />
                <button className="bg-green-500 w-fit p-2 text-[10px] rounded-lg  " type="submit">Add Ingredient</button>
            </form>
        </main>
    )
}
    

