import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import './BlogPost.css';
import reviewHorse1 from '../../assets/reviewHorse1.jpg';
import reviewHorse2 from '../../assets/reviewHorse2.jpg';
import reviewHorse3 from '../../assets/reviewHorse3.jpg';
import horseReviewer1 from '../../assets/horseReviewer1.jpg';
import horseReviewer2 from '../../assets/horseReviewer2.jpg';
import horseReviewer3 from '../../assets/horseReviewer3.jpg';
import { AiFillStar, AiOutlineLine } from 'react-icons/ai';
import { BiCalendar } from 'react-icons/bi';

const reviews = [
	{
		reviewTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		description:
			'Horses are majestic creatures, embodying grace and power in every stride. Watching them gallop freely across the open fields is a sight that never fails to fill my heart',
		rating: '4.2',
		horseImage: reviewHorse1,
		name: 'Ayesha',
		reviewerImage: horseReviewer1,
	},
	{
		reviewTitle: 'Lorem ipsum dolor sit amet usjsma adipisicing elit.',
		description:
			'There is something truly therapeutic about spending time with horses. Their gentle nature and soulful eyes create a unique connection that can heal the spirit',
		rating: '4.7',
		horseImage: reviewHorse2,
		name: 'John Alexer',
		reviewerImage: horseReviewer2,
	},
	{
		reviewTitle: 'Lorem ipsum dolor sit amet uthdis adipisicing elit.',
		description:
			'Horses have been our companions for centuries, serving as trusted partners in work and play. Their loyalty, intelligence, and beauty continue to captivate our hearts, ',
		rating: '4.5',
		horseImage: reviewHorse3,
		name: 'Usman',
		reviewerImage: horseReviewer3,
	},
];

function BlogPost() {
	return (
		<div className="blogPost section">
			<div className="secContainer container">
				<div className="reviewContainer grid">
					{reviews.map((review) => (
						<div className="singleReview grid" key={review.reviewTitle}>
							<div className="imgDiv">
								<img src={review.horseImage} alt="Horse Image" />
							</div>
							<div className="reviewContent">
								<div className="dateBox flex">
									<BiCalendar />
									<p className="date"> 2020=02-26 11:21 AM</p>
								</div>
								<h5 className="reviewTitle">{review.reviewTitle}</h5>
								<span className="desc">{review.description}</span>

								<div className="expandButtonBox flex">
									<p className="seeMore">See More</p>
									<AiOutlineLine />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default BlogPost;
