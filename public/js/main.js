function getContent(fragmentId){
    var pages = {
        'home':
        `
        <div id="home-banner">
            <img src="img/facility-img/o-house outside.png" alt="Ōtautahi House outside">
            
            <div class="home-blurb blurb-1">
                <h2>Ōtautahi House</h2>
            </div>
            
            <div class="home-blurb blurb-2">
                <p>By choosing to study at Ara, we offer modern accommodation in the heart of Christchurch City, to support you on your pathway to success.</p>
            </div>     
            
            <div class="home-blurb blurb-3">
                <p>Otautahi House is just a few minute’s walk from many of Christchurch’s attractions
                - the Botanic Gardens, the Canterbury Museum, and the CBD’s shopping complex.</p>
                <br>
                <p>We put a large focus on building a positive community where you can thrive in your studies and as a person. We have an extensive support team who will care for you like family. Check us out!</p>
            </div>
        </div>`
        ,
            
        'the-house':
        `
		<h1 class="page-heading">Our Flatting Facilities</h1>
        <div id="house-location">
            <div>
                <h2>Ōtautahi House</h2>
                <p>is located directly opposite Ara’s City Campus, Southeast of the Christchurch CBD.</p>
                <br>
                <p>279 Saint Asaph Street,<br>
                Christchurch Central City,<br>
                Christchurch 8011</p>
                <iframe id="google-map-frame" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11569.04540765459!2d172.6414542!3d-43.5385937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f570c53b001711!2sOtautahi%20House%20at%20Ara!5e0!3m2!1sen!2snz!4v1622861055631!5m2!1sen!2snz" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>        
            <div>
                <img id="house-outside" src="img/facility-img/large view.png" alt="Ōtautahi House outside view">
            </div>
        </div>
        
        <div id="house-about">
            <h2>About the House</h2>
            <ul style>
                <li>
                    <p>192 individual bedrooms.</p>
                </li>
                <li>
                    <p>5 blocks: A - E. The old blocks, A & B, are more spacious.</p>
                </li>
                <li>
                    <p>Bedrooms are unfirnished, basic mattress and mattress protector are provided.</p>
                </li>
                <li>
                    <p>Common areas in each apartment floor. Each common area has a kitchenette with a stovetop, oven, and fridge.</p>
                </li>
                <li>
                    <p>A secure bike shed.</p>
                </li>
                <li>
                    <p>21 car parking spaces, available upon application.</p>
                </li>
                <li>
                    <p>Free 24/7 Wi-Fi.</p>
                </li>
                <li>
                    <p>Free laundry facilities on each floor.</p>
                </li>
                <li>
                    <p>Secure swipe card access to the building.</p>
                </li>
                <li>
                    <p>A spaceous courtyard in the apartment grounds.</p>
                </li>
                <li>
                    <p>Accessible rooms to students with disabilities.</p>
                </li>
            </ul>
            
            <div class="scroll-menu">
                <img src="img/facility-img/empty room.jpg" alt="Empty room">
                <img src="img/facility-img/lounge.jpg" alt="Living room">
                <img src="img/facility-img/empty kitchen.jpg" alt="Empty kitchen">
                <img src="img/facility-img/bathroom.jpg" alt="Bathroom">
                <img src="img/facility-img/laundry.jpg" alt="Laundry room">
                <img src="img/facility-img/bike shed.jpg" alt="Bike shed">
                <img src="img/facility-img/carpark.jpg" alt="Carpark">
                
                <div class="scroll-instructions">
                    <img src="img/icons/photo-gallery.png">
                    <p>Scroll to view gallery</p>
                </div>
            </div>
        </div>
        
        <div id="house-about-2">
            <p>Students are encouraged to furnish their space however they like. We cater to students who wish to stay on an alcohol-free floor.</p>
            <img src="img/facility-img/room.jpg" alt="Furnished room">
            <img src="img/facility-img/kitchen.jpg" alt="Furnished kitchen">
        </div>
        
        <div id="house-fees">
            <h2>2021 Residential Fees</h2>
            <p>Fees include power and Wi-Fi.</p>
            <br>
            <p>Domestic (NZ) Students: $9840 (equivalent to $205 rent per week. 48 week contract).</p>
            <p>International Students: $9840 (equivalent to $205 rent per week. 48 week contract).</p>
            <br>
            <p>For more pricing information, see <a href="#stay-with-us"> Stay With Us</a>.</p>
        </div>
        `,
        
        'our-community':
        `
		<h1 class="page-heading">What We Stand For</h1>
        <div id="community-values">
            <div>
                <p>At Ōtautahi House, we embrace Ara’s Kaupapa (values) of:</p>
                <ul>
                    <li><p>Aroha - Respect</p>
                    <li><p>Hihiri - Inspire</p>
                    <li><p>Hono - Connect</p>
                </ul>
                <br>            
                <p>We always strive to achieve inclusivity and diversity in our grounds. We have a strong affinity for Māori, Pasifika, and international residents.<p>
                <br>
                <p>We are a safety-conscious facility. We take the wellbeing of our residents seriously in the face of the ongoing COVID-19 pandemic. We continue to follow all advice from the Ministry of Health and the New Zealand Government.</p>
            </div>
            <div>
                <img src="img/facility-img/courtyard.jpg" alt="Courtyard">
            </div>
        </div>
        
        <div id="community-support">
            <h2>Support</h2>
            <div>
                <p>For a student to succeed in their studies, we know just how important it is for them to feel safe and supported, and also to have a work-life balance. We follow the <a href="https://www.nzqa.govt.nz/providers-partners/domestic-code-of-practice/" target="_blank" rel="noopener noreferrer">Interim Code of Practice 2019</a> for pastoral care of our tertiarty student residents.
                
                <h3>Support Crew</h3>
                <ul>
                    <li>Debbie Evans - Student Advisor</li>
                    <li>Heather Clark - Manager of Student Transition, accommodation, and activities</li>
                    <li>Tim Bain - Student Activities Team Leader</li>
                    <li>Chiaki Bolam-Smith - Community Development</li>
                </ul>
                <p>Seven additional support personnel are available.</h3>
                
                <h3>Residential Assistants</h3>
                <p>Ōtautahi House has five residential assistants (RAs), who are students staying at the House. Each assistant is assigned to a block and is reponsible for the students in that block. They are on duty at night.</p>
                
                <h3>Security Services</h3>
                <p>Ōtautahi House has a security team available 24/7. They can escort students late at night back to Ōtautahi House if they feel unsafe.</p>
                <br>
                <p>Posters of the support crew and RAs are displayed in each block</p>
            </div>
            
            <img src="img/facility-img/support-poster.jpg" alt=Support crew poster">
        </div>
        
        <div id="community-testimonials">
            <h2>Student Testimonials</h2>
            <ul>
                <li class="testimonial">
                    <img src="img/icons/smiley.png" alt="Student testimonial">
                    <div>
                        <p>Name: (TBA)</p>
                        <p>Course: (TBA)</p>
                        <br>
                        <p><i>"A statement of how their experience has been staying at Ōtautahi House"</i></p>
                    </div>
                </li>
                
                <li class="testimonial">
                    <img src="img/icons/smiley.png" alt="Student testimonial">
                    <div>
                        <p>Name: (TBA)</p>
                        <p>Course: (TBA)</p>
                        <br>
                        <p><i>"A statement of how their experience has been staying at Ōtautahi House"</i></p>
                    </div>
                </li>
                
                <li class="testimonial">
                    <img src="img/icons/smiley.png" alt="Student testimonial">
                    <div>
                        <p>Name: (TBA)</p>
                        <p>Course: (TBA)</p>
                        <br>
                        <p><i>"A statement of how their experience has been staying at Ōtautahi House"</i></p>
                    </div>
                </li>
            </ul>
        </div>
        
        <div id="community-rules">
            <h2>House Rules</h2>
            <p>Ōtautahi House has house rules based on consideration and respect for others to allow it to function effectively and to ensure your academic success and enjoyment. This includes a no smoking rule. Just as smoking is not permitted on Ara campuses, smoking is also not permitted in the apartments or on the grounds of Ōtautahi House.</p>
            <br>
            <div class="main-img-link">
                <img src="img/icons/rulebook.png" alt=House rules icon">
                <a href="https://www.ara.ac.nz/siteassets/documents---home/explore-ara/accommodation/otautahi-house-rules-.pdf" target="_blank" rel="noopener noreferrer"><b>View House Rules (PDF 0.1MB)</b></a>
            </div>
        </div>
        `,
        
        'student-events':
        `
		<h1 class="page-heading">Our Student Events</h1>
        <div id="events-info">
            <h2>Student Events</h2>
            <div>
                <p>Life at Ōtautahi House is never dull. Throughout the year, Summer or Winter, rain or shine, we host many events. These events are organised either by the support crew and RAs, or by our own residents.</p>
                <br>
                <p>In the past, we have taken residents on trips to Hanmer Springs, skiing at Mt Hutt, or to the hot pools at New Brighton</p>
                <br>
                <p>We regularly hold events such as movie nights, quiz nights, barbecues and even student-hosted events, like halloween parties.</p>
                <br>
                <p>Complete information on upcoming events is routinely posted on Otautahi House’s Facebook page, exclusive to residents.</p>
                <br>
                <p>These regular social events are covered by a $205.00 activites fee at the beginning of the study year. For more pricing information, see <a href="#stay-with-us">Stay With Us</a>.</p>
            </div>            
            <div id="events-gallery">
                <img src="img/icons/photo-gallery.png" alt="Event photo"> 
                
                <div class="view-instructions" onclick="openImgGallery()">
                    <img src="img/icons/photo-gallery.png" alt="Event photo">
                    <p>Click to open gallery</p>
                </div>
                
                <div class="img-gallery">
                    <div class="img-gallery-inner">
                        <p class="gallery-exit-btn" onclick="closeImgGallery()">&#x2715;</p>
                        <div class="img-gallery-content">
                            <img src="img/icons/photo-gallery.png" alt="Event photo">
                            <img src="img/icons/photo-gallery.png" alt="Event photo">
                            <img src="img/icons/photo-gallery.png" alt="Event photo">
                            <img src="img/icons/photo-gallery.png" alt="Event photo">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div id="events-poster">
            <p>Here is a poster that we displayed for 2020's orientation week.</p>
            <img src="img/facility-img/event poster.png" alt="Orientation week event poster">
        </div>
        `,
        
        'stay-with-us':
        `
		<h1 class="page-heading">Apply For A Room</h1>
        <div id="apply-availability">
            <h2>Room Availability</h2>
            <div id="room-availability">
                <h3>12</h3>
                <p>rooms currently available</p>
            </div>
            <div>
                <p>We’d love for you to join our community. Ōtautahi House has 192 rooms for its residents. Availability will often change at the beginning and end of each year.</p>
            </div>
        </div>
        
        <div id="apply-instructions">
            <h2>How to Apply</h2>
            <img class="main-img-link" src="img/icons/application-form.png" alt="Application form icon">
            
            <div>
                <a href="https://www.ara.ac.nz/siteassets/documents---home/explore-ara/accommodation/student-accommodation-application-pack.pdf" target="_blank" rel="noopener noreferrer">
                    <p><b>View Application Form (PDF 0.1MB)</b><p>
                </a>
                
                <p>Please return your completed application form by:</p>
                <ul>
                    <li>
                    <b>Email</b>
                    <br>
                    <b><a href="mailto:accommodation@ara.ac.nz" target="_blank" rel="noopener noreferrer">accommodation@ara.ac.nz</a></b>
                    </li>
                    
                    <li>
                    <b>Post</b>
                    <br>
                    <p>279 Saint Asaph Street,<br>
                    Christchurch Central City,<br>
                    Christchurch 8011</p>
                    </li>
                </ul>
            </div>
                
            <div>
                <p>To secure your spot, we strongly recommend applying before 31 October.<p>
                <p>As rooms are limited, you should not wait until you are accepted into a course before applying to live at Ōtautahi House. You will be notified in October and November whether your application has been successful or not. Students seeking accommodation during the year should enquire as there may be vacancies.</p>
                <p>Preference is given to learners aged 18 - 25, and who are studying full time at Ara.</p>
            </div>
        </div>
        
        <div id="apply-fees">
            <h2>Complete 2021 Fees</h2>
            <p>All fees are in New Zealand dollars and are subject to change.</p>
            <table id="fee-table">
                <tr>
                    <th></th>
                    <th>Domestic Students</th>
                    <th>International Students</th>
                </tr>
                <tr>
                    <td>Bond (refundable)</td>
                    <td>$410.00 - Two week’s rent</td>
                    <td>$820.00 - One month’s rent</td>
                </tr>
                <tr>
                    <td>Activities fee (non-refundable)</td>
                    <td>$205.00 at beginning of studies</td>
                    <td>$205.00 at beginning of studies</td>
                </tr>
                <tr>
                    <td>Administration fee</td>
                    <td>$230.00 at beginning of studies</td>
                    <td>$230.00 at beginning of studies</td>
                </tr>
                <tr>
                    <td>Residential fee - includes power and Wi-Fi</td>
                    <td>$9840.00 - 48 week contract, equivalent to $205.00 a week</td>
                    <td>$9840.00 - 48 week contract, equivalent to $205.00 a week</td>
                </tr>
                <tr>
                    <td>Car parking (limited to 21 spaces, allocated by a ballot)</td>
                    <td>$22.50 per week</td>
                    <td>N/A</td>
                </tr>
                <tr>
                    <td>Bedding pack (optional)</td>
                    <td>N/A</td>
                    <td>$140.00</td>
                </tr>
            </table>
            <br>
            <p>Food is paid for by self-catering and/or shared costs with flatmates.</p>
            <p>Social activities are arranged throughout the year, such as barbecues, pizza nights, a quiz competition and an end of year function. The activities fee covers the cost of these events.</p>
        </div>
        
        <div id="apply-payment">
            <h2>Payment Options</h2>
            <p>All payments must be made by direct payment.</p>
            <br>
            <p>There are five options available for domestic students to pay rent at Ōtautahi House:</p>
            <ul>
                <li>
                    <p>Pay the full amount ($9840.00) at the start of your studies</p>
                </li>
                <li>
                    <p>Pay half of the fees at the start of your studies and the other half in June/July</p>
                </li>
                <li>
                    <p>Pay quarter of the fees at the start of each term (a payment schedule will be provided)</p>
                </li>
                <li>
                    <p>Fortnightly automatic payments (this will require a guarantor and a payment schedule will be provided)</p>
                </li>
                <li>
                    <p>Weekly automatic payments (this will require a guarantor and a payment schedule will be provided)</p>
                </li>
            </ul>
            <p>International students are required to pay the full amount ($9840.00) before arriving.</p>
            <br>
            <p>If accepted, a bond must be paid to confirm your room booking. If you are accepted into the accommodation but are subsequently not accepted into the programme of study you have applied for, the bond and administration fee will be refunded provided notice is given by the withdrawal date deadline. If you choose not to study with Ara your bond will be refunded, less the administration fee.</p>
        </div>
        `,
        
        'vtour':
        `
        <h1 class="page-heading">Ōtautahi House and Christchurch - A Virtual Tour</h1>
        <p>To use this virtual tour, you can click/tap and drag the view to look around. You can use the scrollwheel/pinch to zoom in and out.</p>
        <iframe id ="vtour-frame" src="https://app.lapentor.com/sphere/otautahi-house-jk" frameborder="0" width="100%" scrolling="no" allow="vr,gyroscope,accelerometer" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"></iframe>
        `
    };
    
    return pages[fragmentId];
}

function loadContent(){
    var contentDiv = document.getElementById("main-content");
    var headerHeight = document.getElementsByTagName("header")[0].clientHeight;
    fragmentId = location.hash.substr(1);
    
    contentDiv.innerHTML = getContent(fragmentId);
    if (fragmentId == "home") {
        window.scrollTo(0, 0);
    } else {
        window.scrollTo(0, headerHeight);
    }
}

if(!location.hash) {
  location.hash = "#home";
}

loadContent();

window.addEventListener("hashchange", loadContent);