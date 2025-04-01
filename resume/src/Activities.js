import activitiesData from './assets/activities.json';

function Activities() {
    return (
        <div className="Activities container mt-5">
            <h2 className="mb-4">Leadership and Extracurricular Activities 🤝</h2>
            <div className="row">
                {activitiesData.map((activity, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card h-100">
                            {
                                <img 
                                src={require(`${activity.img}`)} 
                                className="card-img-top" 
                                alt={activity.name} 
                                style={{ height: '200px', objectFit: 'cover' }} 
                            />
                            }
                            <div className="card-body">
                                <h5 className="card-title">{activity.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{activity.organization}</h6>
                                <p className="card-text">{activity.description}</p>
                                {activity.link && (
                                    <a href={activity.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                        Learn More
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Activities;