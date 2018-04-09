import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer'

export default class  extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <main role="main">

                    <section className="jumbotron text-center">
                        <div className="container">
                            <h1 className="jumbotron-heading">Album example</h1>
                            <p className="lead text-muted">Something short and leading about the collection below—its
                                contents, the creator, etc. Make it short and sweet, but not too short so folks don't
                                simply skip over it entirely.</p>
                            <p>
                                <a href="#" className="btn btn-primary">Main call to action</a>
                            </p>
                        </div>
                    </section>


                </main>
                <Footer/>
            </div>
        )
    }
}




