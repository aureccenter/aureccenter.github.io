const Monthly = () => {
  return (
    <div className='container mb-5 mt-3'>
      <div className='row'>
        <div className='col' style={{ height: '600px' }}>
          <iframe
            src='https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FDetroit&amp;src=MTRxNXVrZDNjbGkzNjdzMTdwcWE0b2p0NjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZTA5ZGpybDMzaDRrZHY4aTB2aGZydGFxa2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=aXF1NzAxbWw4dGEwdmpzb3VnOXZsaWQ5YjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23039BE5&amp;color=%23D50000&amp;color=%237CB342&amp;title=Rec%20Center%20Reservations&amp;showNav=1&amp;showTabs=0&amp;showPrint=0'
            style={{ border: 'solid 1px #777' }}
            width='100%'
            height='100%'
            frameborder='0'
            scrolling='no'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Monthly;
