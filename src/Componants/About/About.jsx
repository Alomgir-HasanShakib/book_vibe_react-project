const About = () => {
  return (
    <div className="mb-10 px-4">
      <div className="bg-[#1313130D] rounded-lg mt-9 mb-9 py-8">
        <h2 className="text-3xl font-bold text-[#131313] text-center">About</h2>
      </div>
      <div className="mb-10">
        <p className="text-[#13131370] text-xl font-medium">
          <span className="text-4xl italic text-[#131313]">The man</span> who
          does not read good books has no advantage over the man who cannot read
          them. - Mark Twain. Tired of all the strange suggestions from phony
          sources to fulfill your cravings for just a good book? If that
          happens, get ready to unleash the bookworm within at this gateway to
          book discovery!{" "}
          <span className="primary-bg px-2 rounded-sm text-white">
            {" "}
            Welcome to Book Vibe
          </span>
        </p>
      </div>
      <div className="space-y-4  text-[18px] font-medium text-[#13131380]">
        <h2 className="text-5xl font-bold text-[#131313CC] fair-dis">
          Words from the Founder
        </h2>
        <p>
          I am Rosie Langello, the founder and book enthusiast behind Book Vibe.
          I’ve been an avid reader since childhood. From then, I became a
          frequent visitor to local book fairs and libraries. My constant search
          for new stories to devour took me to countless literary events in
          Shotwell St, San Francisco, and the surrounding areas.
        </p>
        <p>
          From local book fairs to regional literature festivals, I have been
          engaged in a continuous quest for literary exploration. I hardly even
          miss participating in book reading contests and bringing home several
          awards.
        </p>
        <p>
          And guess what? All these festivals celebrate the written word and
          bring together a diverse range of writers, artists, and creatives.
          Significantly, the Scholastic Book Fair feels very familiar to me. I
          love engaging in thought-provoking author talks, panel events, and
          writing workshops.
        </p>
        <h3>The story doesn’t stop there.</h3>
        <p>
          I even pursued a degree in English Literature from Rutgers University.
          It has deepened my understanding of the mechanics behind the written
          word. I guess you understand how serious I am about literature! Books
          that I love much cannot be listed on a single page. Yet, here are some
          of them you may find worth reading:
        </p>
        <ul className="list-disc text-[#131313B3]">
          <li>
            <span className="font-bold text-[#131313]">Romantic Suspense:</span>{" "}
            The Risk by S.T. Abby, Unforgiven by Rebecca Zanetti, and Lotus by
            Jennifer Hartmann.
          </li>
          <li>
            <span className="font-bold text-[#131313]">Thrillers:</span> Gone
            Girl by Gillian Flynn and Big Little Lies by Liane Moriarty.
          </li>
          <li>
            {" "}
            <span className="font-bold text-[#131313]">Poetry:</span> Smoke &
            Mirrors by Michael Faudet.
          </li>
        </ul>
        <p>And the list goes on….</p>
        <p>
          This deep love for books grew into an insatiable curiosity to share it
          through this platform. Here, we help readers discover and list their
          favorite books and authors.
        </p>
      </div>
    </div>
  );
};

export default About;
