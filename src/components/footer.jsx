

export default function Footer (){

    return(
        <>
      <section className="h-46 lg:40">
          <footer className="flex mt-5 lg:mt-10 h-full items-center justify-center mt-0 auto border-t border-gray-300 space-x-3 p-5">
            Created by Okechukwu  with <lord-icon
     src="https://cdn.lordicon.com/ewmfucya.json"
    trigger="in"
    delay="1500"
    stroke="bold"
    state="in-reveal"
    colors="primary:#121331,secondary:#16c72e,tertiary:#ffc738,quaternary:#f9c9c0,quinary:#f24c00,senary:#ebe6ef"
   style={{width:"20px", height:"20px"}}>
</lord-icon>
{new Date().getFullYear()}
        </footer>
      </section>
        </>
    )
}