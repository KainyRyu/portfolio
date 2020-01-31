import React from 'react';
import "./Project.css";
import "../App.css";

class Projects extends React.Component {

    constructor() {
        super();
        this.state = { projects }
    }

    componentDidMount()

    render() {
        return (
            <div className='Projects'>
                <div className='timesProject flexColumn'>
                    <h1>Projects</h1>
                    <div className='topBorder'>
                        <a href='https://nadinefresko.github.io/group_project/' alt='Recycle Group project' target='_blank'>
                            <h4>Recycling<svg width="7" height="11" viewBox="0 0 7 12"><path d="M1 1l4.333 5L1 11" stroke="#121212" stroke-width="2" fill="none" fill-rule="evenodd"></path></svg></h4>
                        </a>
                        <p>The first group project web app with a drag and drop recycling game. Not mobile friendly. <label>Code First: Girls group project</label></p>
                    </div>
                    <div className='topBorder'>
                        <a href='https://kodflix-kainy.herokuapp.com' alt='Kodflix' target='_blank'>
                            <h4>Kodflix</h4>
                        </a>
                        <p>A website built with React.</p>
                    </div>
                    <div className='topBorder'>
                        <a href='' alt=''>
                            <h4>Group Projects</h4>
                        </a>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, nulla velit dolorem iusto quisquam sequi iste tempora. Deleniti labore</p>
                    </div>
                </div>
            </div>
        )
    };
}