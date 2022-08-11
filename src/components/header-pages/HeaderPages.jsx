
const HeaderPages = ({title, text}) => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <h2>{title}</h2>
                            <span>{text}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderPages