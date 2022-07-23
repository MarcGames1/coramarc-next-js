

const NewsLetterCta = (props) =>{
const {title, subtitle, butonText} = props
    return(
        <>
            <section className="newsletter-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="newsletter-wrapper text-center">
                                <h3 className="title text-white">{title}</h3>
                                <form className="newsletter-inner" id="mc-form">
                                    <input type="email" className="news-field" id="mc-email" autoComplete="off" placeholder="Adresa de email" />
                                    <button style={{ whiteSpace: "nowrap" }} className="news-btn" id="mc-submit">{butonText}</button>
                                </form>
                                <h6 className="newsletter-subtitle">{subtitle}</h6>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default NewsLetterCta