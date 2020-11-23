import React from 'react';
import Card from './Card';
const CardSection = () => {
    return(
    <section className="contact bg-success ">
        <div className="container ">
            <h2 className="text-white">
            We love new friends!
            </h2>
            <div className="row">
            <div className="col-4">
                <Card title="Google" subTitle="Google, LLC is an American multinational technology company that specializes in Internet-related services and products, which include  a search engine, cloud computing, software, and hardware." buttonText="Login to Google"/>
            </div>
            <div className="col-4">
                <Card title="FaceBook" subTitle="Facebook, Inc. (stylized as FACEBOOK) is an American social media conglomerate corporation based in Menlo Park, California. It was founded by Mark Zuckerberg, a popular global social networking website." buttonText="Login to FaceBook"/>

            </div>
            <div className="col-4">
                <Card title="Instagram" subTitle="Instagram is an American photo and video sharing social networking service owned by Facebook, created by Kevin Systrom and Mike Krieger and originally launched on iOS in October 2010." buttonText="Login to Instagram"/>
            </div>
            </div>
        </div>
    </section>
    )
}

export default CardSection