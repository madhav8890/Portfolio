import { Col } from "react-bootstrap";

export const SkillCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={5} sm={2} md={2}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
