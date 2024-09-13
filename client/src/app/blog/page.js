import Image from 'next/image';
import Link from 'next/link';

async function getBlogPosts() {
  
  return [
    {
      id: 1,
      slug: 'why-staying-at-home-is-important',
      title: 'Why Staying at Home is Important',
      excerpt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      image: '/images/img_2.jpg'
    },
    {
      id: 2,
      slug: 'another-blog-post',
      title: 'Another Blog Post',
      excerpt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      image: '/images/img_3.jpg'
    },
    // Add more blog posts as needed
  ];
}

export default async function Blog() {
  const blogPosts = await getBlogPosts();

  return (
    <>
      <div className="hero overlay">
        <div className="img-bg rellax">
          <Image src="/images/magical-kenya-3.jpg" alt="Image" layout="fill" objectFit="cover" />
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-lg-5">
              <h1 className="headings" data-aos="fade-up">Blog</h1>
              <p className="mb-5" data-aos="fade-up">With a deep understanding of the diverse landscapes, cultures, and wildlife that Kenya has to offer, we are dedicated to providing personalized travel experiences that cater to your unique preferences and needs.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row mb-5">
            {blogPosts.map((post) => (
              <div className="col-lg-6" key={post.id}>
                <div className="post-entry">
                  <Image src={post.image} alt={post.title} width={500} height={350} className="img-fluid mb-4" />
                  <h2 ><Link href={`/blog/${post.slug}`} className="highlighted-name">{post.title}</Link></h2>
                  <p>{post.excerpt}</p>
                  <p><Link href={`/blog/${post.slug}`} className="btn btn-primarys">Read More</Link></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}