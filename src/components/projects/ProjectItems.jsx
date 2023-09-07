import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";
import PropTypes from 'prop-types';

const ProjectItems = ({ item }) => {
  const { image, title, tags } = item;

  return (
    <div className="project__card" key={item.id}>
      <img className="project__img" src={image} alt={title} />
      <h3 className="project__title">{title}</h3>
      <a href="index.html" className="project__button">
        Demo <HiOutlineArrowSmRight className="project__button-icon" />
      </a>
      <ul className="custom-list">
        {tags && tags.split(',').map((tag, index) => (
          <li className="custom-button" key={index}>
            {tag.trim()}
          </li>
        ))}
      </ul>
    </div>
  );
}

ProjectItems.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ProjectItems;
