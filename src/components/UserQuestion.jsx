import "./userQuestion.css";

export function UserQuestion() {
    return(<div>
        <h3>Tu pregunta</h3>
        <div className="container">
        <div className=" container_answare">
            <div className="section_photo">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19 11.25C19 12.5761 18.4732 13.8479 17.5355 14.7855C16.5979 15.7232 15.3261 16.25 14 16.25C12.6739 16.25 11.4021 15.7232 10.4645 14.7855C9.52678 13.8479 9 12.5761 9 11.25C9 9.92392 9.52678 8.65215 10.4645 7.71447C11.4021 6.77678 12.6739 6.25 14 6.25C15.3261 6.25 16.5979 6.77678 17.5355 7.71447C18.4732 8.65215 19 9.92392 19 11.25ZM16.5 11.25C16.5 11.913 16.2366 12.5489 15.7678 13.0178C15.2989 13.4866 14.663 13.75 14 13.75C13.337 13.75 12.7011 13.4866 12.2322 13.0178C11.7634 12.5489 11.5 11.913 11.5 11.25C11.5 10.587 11.7634 9.95107 12.2322 9.48223C12.7011 9.01339 13.337 8.75 14 8.75C14.663 8.75 15.2989 9.01339 15.7678 9.48223C16.2366 9.95107 16.5 10.587 16.5 11.25Z" fill="#FCF2D6"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 1.25C6.40625 1.25 0.25 7.40625 0.25 15C0.25 22.5938 6.40625 28.75 14 28.75C21.5938 28.75 27.75 22.5938 27.75 15C27.75 7.40625 21.5938 1.25 14 1.25ZM2.75 15C2.75 17.6125 3.64125 20.0175 5.135 21.9275C6.18404 20.5499 7.53737 19.4334 9.08929 18.6654C10.6412 17.8973 12.3497 17.4985 14.0812 17.5C15.7904 17.4984 17.4774 17.8869 19.0137 18.636C20.5499 19.385 21.895 20.4749 22.9462 21.8225C24.0293 20.402 24.7585 18.744 25.0736 16.9857C25.3887 15.2275 25.2805 13.4194 24.7581 11.7112C24.2357 10.003 23.314 8.44381 22.0694 7.16255C20.8247 5.88128 19.2928 4.91482 17.6005 4.34314C15.9081 3.77145 14.104 3.61096 12.3373 3.87497C10.5707 4.13897 8.89224 4.81986 7.44096 5.86132C5.98968 6.90277 4.80726 8.27484 3.99154 9.86399C3.17581 11.4532 2.75023 13.2137 2.75 15ZM14 26.25C11.4174 26.2539 8.91283 25.3654 6.91 23.735C7.71616 22.5809 8.78917 21.6386 10.0377 20.9884C11.2863 20.3381 12.6735 19.999 14.0812 20C15.4715 19.9989 16.8419 20.3295 18.0787 20.9643C19.3155 21.5991 20.383 22.5198 21.1925 23.65C19.1741 25.3334 16.6282 26.2537 14 26.25Z" fill="#FCF2D6"/>
                </svg>
            </div>
            <div className="section_text">
                <form method="POST" action="conexion.php" className="section_text">
                    <input type="text" placeholder="Tu Curiosidad, Tu Respuesta: ¿Listo para Preguntar?" className="text"/>
                    <input type="submit" name="" id="" value="" className="submit" />
                </form>
            </div>
        </div>
    </div>
    <h3 className="nex_answares">Preguntas</h3>
    </div>);
}