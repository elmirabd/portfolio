import React from 'react';
import {Grid, Cell} from "react-mdl";
import Education from './education';
import Experience from "./experience";
import Skills from "./skills";
import Languages from "./languages";

function Resume() {
    return (
        <div className="resume-body">
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign: "center"}}>
                        <img src={require('../media/elmir.jpg')} className="image-class-2" alt="avatar"/>
                    </div>
                    <h2 style={{paddingTop: "2em"}}>Elmir Abdurahimov</h2>
                    <h4 className={{color: "grey"}}>Programmer</h4>
                    <hr style={{borderTop: "3px solid #833fb2", width: "50%"}}/>
                    <p>Hello! This is a generator for text fonts of the "cool" variety. I noticed people were trying to
                        find a generator like fancy letters, but were ending up on actual font sites rather than
                        generators of copy-paste text like this one. So currently this is basically a duplicate of the
                        above, but I think I'll try to collect a few more "cool" text fonts, like the old enlgish one,
                        and specialise this a bit.</p>
                    <hr style={{borderTop: "3px solid #833fb2", width: "50%"}}/>
                    <h5>Address</h5>
                    <p>Baku, Azerbaijan</p>
                    <h5>Phone</h5>
                    <p>(+994)70 800 66 40</p>
                    <h5>Email</h5>
                    <p>elmir.abdurahimov@gmail.com</p>
                    <hr style={{borderTop: "3px solid #833fb2", width: "50%"}}/>
                </Cell>

                <Cell className="resume-right-col" col={8}>
                    <h3>Education</h3>

                    <Education startYear={2001}
                               endYear={2011}
                               schoolName="Sheki reg. Bilecik village School"
                               schoolDesc="Unipage is an official representative of many educational institutions abroad.
                                           We also use a reliable and proven methods of searching for academic programs as well as apply successful admission strategies,
                                           so our clients don't waste their time searching for retrieval of information and avoid taking unnecessary steps.
                                           While we are engaged in your admission, you can concentrate on preparing for exams and improving your proficiency in foreign language."
                    />


                    <Education startYear={2011}
                               endYear={2015}
                               schoolName="Azerbaijan State Oil Academy"
                               schoolDesc="Entering a university is an important and crucial step in the life of everyone. Let the professionals assist you at every stage of admission. We will:
                                            consult regarding education abroad;
                                            choose a university and an academic program;
                                            prepare and edit the set of application documents;
                                            send an application to the university;
                                            submit documents for scholarships;
                                            assist in applying for a student visa."
                    />

                    <hr style={{borderTop: "3px solid #e22947"}}/>
                    <h3>Experience</h3>
                    <Experience startYear={2014}
                                endYear={2015}
                                workPlace="CCI-Tech"
                                jobDesc=""

                    />

                    <Experience startYear={2019}
                                endYear={2019}
                                workPlace="IKTEX"
                                jobDesc=""

                    />

                    <hr style={{borderTop: "3px solid #e22947"}}/>
                    <h3>Skills</h3>
                    <Skills
                        skill="Java"
                        progress={90}
                    />
                    <Skills
                        skill="React"
                        progress={70}
                    />
                    <Skills
                        skill="Spring"
                        progress={80}
                    />

                    <hr style={{borderTop: "3px solid #e22947"}}/>
                    <h3>Languages</h3>
                    <Languages
                        lang="Engilsh"
                        progress={65}

                    />
                    <Languages
                        lang="Turkish"
                        progress={90}

                    />

                </Cell>
            </Grid>
        </div>
    );
}

export default Resume;