import { dateFirma } from "../../../../helpers/setari";

export const UserSocialLinks = () => {
  console.log(dateFirma)
  return (
    <>
      <div className="header-social-link">
        <a href={dateFirma.social.facebook}>
          <i className="fa fa-facebook"></i>
        </a>
        <a href={dateFirma.social.youtube}>
          <i className="fa fa-youtube"></i>
        </a>
        <a href={dateFirma.social.instagram}>
          <i className="fa fa-instagram"></i>
        </a>
        <a href={dateFirma.social.pinterest}>
          <i className="fa fa-pinterest"></i>
        </a>
      </div>
    </>
  );
};
