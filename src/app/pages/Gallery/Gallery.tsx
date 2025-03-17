"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import classes from "./index.module.scss";
import { projects, categories } from "../../constants";

// Define the correct Project type
interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string | StaticImageData; // ✅ Supports both string (public/) & imported images
  description: string;
  videoUrl?: string;
  audioUrl?: string;
}

// Define the props for the Modal component.
interface ModalProps {
  project: Project;
  onClose: () => void;
}

// ✅ Fixed Modal Component - Properly Displays Images, Videos & Audio
const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
  return (
    <div className={classes.modalOverlay} onClick={onClose}>
      <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={classes.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={classes.modalMedia}>
          {/* ✅ Display Image Properly */}
          {typeof project.imageUrl === "string" ? (
            <img src={project.imageUrl} alt={project.title} className={classes.fullMedia} />
          ) : (
            <Image src={project.imageUrl} alt={project.title} width={800} height={600} className={classes.fullMedia} />
          )}

          {/* ✅ Display Video (If Available) */}
          {project.videoUrl && (
            <video controls className={classes.fullMedia}>
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}

          {/* ✅ Display Audio (If Available) */}
          {project.audioUrl && (
            <audio controls className={classes.fullMedia}>
              <source src={project.audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
        <div className={classes.modalDescription}>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // ✅ Filter projects correctly
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className={classes.galleryContainer}>
      {/* ✅ Category Buttons */}
      <div className={classes.categories}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${classes.categoryButton} ${selectedCategory === category ? classes.active : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* ✅ Project Gallery */}
      <div className={classes.gallery}>
        {filteredProjects.map((project) => (
          <div key={project.id} className={classes.item} onClick={() => setSelectedProject(project)}>
            {typeof project.imageUrl === "string" ? (
              <img src={project.imageUrl} alt={project.category} className={classes.image} />
            ) : (
              <Image src={project.imageUrl} alt={project.category} width={500} height={300} className={classes.image} />
            )}
            <p className={classes.title}>{project.title}</p>
          </div>
        ))}
      </div>

      {/* ✅ Modal for Zoom View */}
      {selectedProject && <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
};

export default Gallery;
