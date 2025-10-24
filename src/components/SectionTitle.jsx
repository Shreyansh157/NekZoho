const SectionTitle = ({ preTitle, title, description }) => (
  <div className="row justify-content-center text-center mb-5">
    <div className="col-lg-8">
      {preTitle && <p className="text-primary fw-semibold text-uppercase mb-2">{preTitle}</p>}
      <h2 className="display-5 fw-bold text-dark">{title}</h2>
      {description && <p className="lead text-muted mt-3">{description}</p>}
    </div>
  </div>
);

export default SectionTitle;
