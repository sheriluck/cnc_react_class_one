import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Media } from 'reactstrap';
class Prog1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            programs: [
                {
                    id: 0,
                    name: 'Mansoor',
                    image: 'assets/images/mansoor.jpg',
                    label: 'pro',
                    description: 'he is the programmeer who knows very well how to design and code he is the programmeer who knows very well how to design and code '

                },
                {
                    id: 1,
                    name: 'azeem_zaidi',
                    image: 'assets/images/azeem_zaidi.jpg',
                    label: 'pro',
                    description: 'he is the programmeer who knows very well how to design and codehe is the programmeer who knows very well how to design and code  '

                },
                {
                    id: 0,
                    name: 'Fakhra',
                    image: 'assets/images/fakhra.jpg',
                    label: 'pro',
                    description: 'she is the programmeer who knows very well how to design and codehe is the programmeer who knows very well how to design and code  '

                },
                {
                    id: 0,
                    name: 'imran',
                    image: 'assets/images/imran.jpg',
                    label: 'pro',
                    description: 'he is the programmeer who knows very well how to design and code '

                },
            ]
        }

    }
    render() {
        const program = this.state.programs.map((prog) => {
            return (
               
        <div className="col-12 col-md-5 m-1">
            <Media tag="li">
                <Media left middle>
                    <Media object width="100%" height="400" src={prog.image}/>
                    </Media>
                    <Media body className="ml-5">
                    <Media heading >{prog.name}

                    </Media>
                    <p>
                        {prog.description}
                    </p>
                </Media>
            </Media>
        </div>
            )
        })
        return(
                    <div className="container">
                        <div className="row">
                            <Media list>
                                {program}
                            </Media>
                        </div>
                    </div>
        )
    }
}
export default Prog1