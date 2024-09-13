import Image from 'next/image';
import Link from 'next/link';

async function getPost(slug) {
  
  return {
    title: "Blog Post Title",
    author: "John Smith",
    date: "Feb 27, 2022",
    content: "<p>Your blog post content here...</p><p>More paragraphs for the blogg...</p>",
    image: "/images/hero_2.jpg",
    categories: ["Design", "Events"],
    tags: ["html", "trends"],
    comments: [
      {
        name: "Jacob Smith",
        date: "January 9, 2018 at 2:21pm",
        content: "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.",
        avatar: "/images/person_2.jpg"
      },
      // Add more comments as needed
    ]
  };
}

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);

  return (
    <>
      <div className="hero overlay">
        <div className="img-bg rellax">
          <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-lg-6 mx-auto text-center">
              <p>By <a href="#">{post.author}</a> on <a href="#">{post.date}</a></p>
              <h1 className="heading" data-aos="fade-up">{post.title}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 blog-content pe-5">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
              
              {/* <div className="pt-5">
                <p>
                  Categories: {post.categories.map((cat, index) => (
                    <span key={index}><a href="#">{cat}</a>{index < post.categories.length - 1 ? ', ' : ''}</span>
                  ))} 
                  Tags: {post.tags.map((tag, index) => (
                    <span key={index}><a href="#">#{tag}</a>{index < post.tags.length - 1 ? ', ' : ''}</span>
                  ))}
                </p>
              </div> */}

              {/* Comments Section */}
              <div className="pt-5">
                <h3 className="mb-5">{post.comments.length} Comments</h3>
                <ul className="comment-list">
                  {post.comments.map((comment, index) => (
                    <li className="comment" key={index}>
                      <div className="vcard bio">
                        <Image src={comment.avatar} alt={comment.name} width={50} height={50} />
                      </div>
                      <div className="comment-body">
                        <h3>{comment.name}</h3>
                        <div className="meta">{comment.date}</div>
                        <p>{comment.content}</p>
                        <p><a href="#" className="reply">Reply</a></p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Comment Form */}
                <div className="comment-form-wrap pt-5">
                  <h3 className="mb-5">Leave a comment</h3>
                  <form action="#" className="">
                    <div className="mb-3">
                      <label htmlFor="name">Name *</label>
                      <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email">Email *</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="website">Website</label>
                      <input type="url" className="form-control" id="website" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message">Message</label>
                      <textarea name="" id="message" cols="30" rows="10" className="form-control"></textarea>
                    </div>
                    <div className="mb-3">
                      <input type="submit" value="Post Comment" className="btn btn-primarys" />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-md-4 sidebar">
              {/* <div className="sidebar-box">
                <form action="#" className="search-form">
                  <div className="form-group">
                    <span className="icon fa fa-search"></span>
                    <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
                  </div>
                </form>
              </div> */}
              {/* <div className="sidebar-box">
                <div className="categories">
                  <h3>Categories</h3>
                  <li><a href="#" classname= "highlighted-categoriess">Creatives <span>(12)</span></a></li>
                  <li><a href="#" classname= "highlighted-categoriess">News <span>(22)</span></a></li>
                  <li><a href="#" classname= "highlighted-categoriess">Design <span>(37)</span></a></li>
                  <li><a href="#" classname= "highlighted-categoriess">HTML <span>(42)</span></a></li>
                  <li><a href="#" classname= "highlighted-categoriess">Web Development <span>(14)</span></a></li>
                </div>
              </div> */}
              <div className="sidebar-box">
                <Image src="/images/person_1.jpg" alt="Author" width={100} height={100} className="img-fluid mb-4 w-50 rounded-circle" />
                <h3 className="text-black">About The Author</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                <p><a href="#" className="btn btn-primarys">Read More</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}