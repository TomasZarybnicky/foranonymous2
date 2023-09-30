import "./Navbar.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return <header>
    <nav>
      <NavLink to="/">Domů</NavLink>
      <NavLink to="all-kempy">Kempy</NavLink>
    </nav>
  </header>
}

export default Navbar
  const currentLocation = useLocation();


  const handleSearchClick = () => {
    const selectedDestination = $('#destination').val(); // Získání vybrané destinace
  
    // Simulace vyhledávání podle destinace.
    // Tady by bylo volání API nebo nějaké jiné logiky.
    console.log(`Hledání podle destinace: ${selectedDestination}`);
  };




  useEffect(() => {
    flatpickr('.date-picker', {
      dateFormat: "Y-m-d",
      minDate: "today"
    });

    const destinations = [
      { id: 'Adrspasko', text: 'Adršpašsko' },
      { id: 'Berounsko', text: 'Berounsko' },
      { id: 'BeskydyValassko', text: 'Beskydy /Valašsko/' },
      { id: 'CeskaKanada', text: 'Česká Kanada' },
      { id: 'CeskeStredohori', text: 'České středohoří' },
      { id: 'CeskeSvycarsko', text: 'České Švýcarsko' },
      { id: 'CeskyRaj', text: 'Český ráj' },

    ];

    const $destSelect = $('.dest');
    $destSelect.select2({
      placeholder: "Vyberte destinaci",
      allowClear: true,
      data: destinations
    });

    const dropdownElement = document.querySelector('.dropdown-content');
    const dropdownTrigger = document.querySelector('.dropdown');
    const dateIcons = document.querySelectorAll('.date-icon');

    let isOverTrigger = false;
    let isOverDropdown = false;

    if (dropdownTrigger && dropdownElement) {
      dropdownTrigger.addEventListener('mouseenter', function() {
        isOverTrigger = true;
        dropdownElement.style.display = 'block';
      });

      dropdownTrigger.addEventListener('mouseleave', function() {
        isOverTrigger = false;
        setTimeout(() => {
          if (!isOverTrigger && !isOverDropdown) {
            dropdownElement.style.display = 'none';
          }
        }, 300);
      });

      dropdownElement.addEventListener('mouseenter', function() {
        isOverDropdown = true;
      });

      dropdownElement.addEventListener('mouseleave', function() {
        isOverDropdown = false;
        setTimeout(() => {
          if (!isOverTrigger && !isOverDropdown) {
            dropdownElement.style.display = 'none';
          }
        }, 300);
      });
    }

    if (dateIcons) {
      dateIcons.forEach(function(icon) {
        icon.addEventListener('click', function(e) {
          let input = e.target.previousElementSibling;
          if (input) {
            input.focus();
          }
        });
      });
    }

    $('#destination').on('change', function() {
      const selectedDestination = $(this).val();
      console.log('Vybraná destinace:', selectedDestination);
    });

  }, [adults, children, rooms]);

  if (currentLocation.pathname.includes('one-kemp')) {
    return null;
  }

  return (

    <header>
      <nav className='nav1 animation'>
        <NavLink to="/">Domů</NavLink>
        <NavLink to="jak-objednat">Jak objednat</NavLink>
        <NavLink to="ceny">Ceny</NavLink>
        <NavLink to="o-nas">O nás</NavLink>
        <NavLink to="pro-majitele">Pro majitele</NavLink>
      </nav>
      { !currentLocation.pathname.includes('one-kemp') && (
  <nav className='nav2 animation'>
    <div className="selections" id="text-destinace"> {/* Opening tag */}
      <label htmlFor="destination-label" className='destination-label'></label>
      <select className='dest' id="destination" name="destination" required>
        <option value=""></option>
      </select>
      <div className="date-picker-container">
        <div className="date-picker-box">
          <i className="fas fa-calendar-alt date-icon"></i>
          <input type="text" id="start-date" name="start-date" className="date-picker" placeholder="Datum příjezdu" required />
        </div>
        <div className="date-picker-box">
          <i className="fas fa-calendar-alt date-icon"></i>
          <input type="text" id="end-date" name="end-date" className="date-picker" placeholder="Datum odjezdu" required />
        </div>
      </div>
      <div className="dropdown">
        <button type="button" id="dropdown-button">Osoby a místnosti</button>
        <div className="dropdown-content">
          <p className="center-flex">
            <span className="label-text">Dospělí:</span>
            <input type="number" id="adults" name="adults" min="1" max="10" value={adults} onChange={(e) => setAdults(e.target.value)} className="small-input" required />
          </p>
          <p className="center-flex">
            <span className="label-text">Děti:</span>
            <input type="number" id="children" name="children" min="0" max="10" value={children} onChange={(e) => setChildren(e.target.value)} className="small-input" required />
          </p>
          <p className="center-flex">
            <span className="label-text">Místnosti:</span>
            <input type="number" id="rooms" name="rooms" min="1" max="5" value={rooms} onChange={(e) => setRooms(e.target.value)} className="small-input" required />
          </p>
        </div>
      </div>
      <button type="button" id="button-hledat" onClick={handleSearchClick}>Hledat</button>
    </div> {/* Closing tag */}
  </nav>
)}
</header>
)};
export default Navbar;
