import menuIcon from '../../public/menu.svg'
export const PortfolioHeader = () => {
    return (
        <>
          <div className="header">
              <div className="imageDiv">
                <img  src={menuIcon} className="imgStyle"/>
              </div>
              <p>Naman Mamodia</p>
          </div>
        </>
    )
}