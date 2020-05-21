import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <div
                style={{
                    backgroundColor: "white"
                }}
            >
                <div className="container">
                    <nav className="nav nav-pills nav-fill custom-nav collapse" id="nav">
                        <div className="nav-item nav-link">
                            <a
                                href="/f/fashion"
                                role="button"
                                aria-expanded="false"
                                aria-controls="fashionSubMenu"
                                aria-label="Category Name"
                            >
                                FASHION
              </a>
                            <div
                                className="drop-content p-5 text-left collapse"
                                style={{
                                    backgroundColor: "#626262"
                                }}
                            >
                                <div
                                    style={{
                                        display: "grid",
                                        gridAutoFlow: "column",
                                        justifyContent: "center",
                                        fontSize: "1.1rem"
                                    }}
                                >
                                    <div>
                                        <a
                                            href="/c/mens/fc"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            MENS
                    </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: "10px",
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="/c/accessories/fck">Accessories</a>
                                            </li>
                                            <li>
                                                <a href="/c/shirts/fcg">Shirts</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="/c/boys/fe"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            BOYS
                    </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: "10px",
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="/c/accessories/fea">Accessories</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="/c/womens/fb"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            WOMENS
                    </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: "10px",
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="/c/footwear/fba">Footwear</a>
                                            </li>
                                            <li>
                                                <a href="/c/activewear/fbb">Activewear</a>
                                            </li>
                                            <li>
                                                <a href="/c/tops-knitwear/fbe">Tops & Knitwear</a>
                                            </li>
                                            <li>
                                                <a href="/c/intimate-loungewear/fbg">
                                                    Intimate & Loungewear
                        </a>
                                            </li>
                                            <li>
                                                <a href="/c/maternity/fbl">Maternity</a>
                                            </li>
                                            <li>
                                                <a href="/c/pants-shorts/fbf">Pants & Shorts</a>
                                            </li>
                                            <li>
                                                <a href="/c/jackets-outerwear/fbh">
                                                    Jackets & Outerwear
                        </a>
                                            </li>
                                            <li>
                                                <a href="/c/swimwear/fbi">Swimwear</a>
                                            </li>
                                            <li>
                                                <a href="/c/dresses-skirts/fbd">Dresses & Skirts</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="/c/girls/fd"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            GIRLS
                    </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: "10px",
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="/c/accessories/fda">Accessories</a>
                                            </li>
                                            <li>
                                                <a href="/c/underwear-sleepwear/fdj">
                                                    Underwear & Sleepwear
                        </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="/c/accessories/fa"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            ACCESSORIES
                    </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: "10px",
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="/c/sunglasses-eyewear/fac">
                                                    Sunglasses & Eyewear
                        </a>
                                            </li>
                                            <li>
                                                <a href="/c/mens-jewellery/faf">Men's Jewellery</a>
                                            </li>
                                            <li>
                                                <a href="/c/fashion-accessories/fab">
                                                    Fashion Accessories
                        </a>
                                            </li>
                                            <li>
                                                <a href="/c/cold-weather/fag">Cold Weather</a>
                                            </li>
                                            <li>
                                                <a href="/c/watches/fad">Watches</a>
                                            </li>
                                            <li>
                                                <a href="/c/tech/fah">Tech</a>
                                            </li>
                                            <li>
                                                <a href="/c/handbags-leather-smalls/faa">
                                                    Handbags & Leather Smalls
                        </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nav-item nav-link">
                            <a
                                href="/a/baby & kids"
                                role="button"
                                aria-expanded="false"
                                aria-controls="fashionSubMenu"
                                aria-label="Category Name"
                            >
                                BABY & KIDS
              </a>
                            <div
                                className="drop-content p-5 text-left collapse"
                                style={{
                                    backgroundColor: "#626262"
                                }}
                            >
                                <div
                                    style={{
                                        display: "grid",
                                        gridAutoFlow: "column",
                                        justifyContent: "center",
                                        fontSize: "1.1rem"
                                    }}
                                >
                                    <div>
                                        <a
                                            href="/c/feeding/ac"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            FEEDING
                    </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: "10px",
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="/c/feeding-gear/aca">Feeding Gear</a>
                                            </li>
                                            <li>
                                                <a href="/c/dummies/acd">Dummies</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="/c/changing-bathing/aa"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            CHANGING & BATHING
                    </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: "10px",
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="/c/bath-skincare/aaa">Bath & Skincare</a>
                                            </li>
                                            <li>
                                                <a href="/c/shampoo-conditioner/aab">
                                                    Shampoo & Conditioner
                        </a>
                                            </li>
                                            <li>
                                                <a href="/c/nappies/aad">Nappies</a>
                                            </li>
                                            <li>
                                                <a href="/c/wipes/aac">Wipes</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="/c/toys/af"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            TOYS
                    </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: "10px",
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="/c/costumes/afh">Costumes</a>
                                            </li>
                                            <li>
                                                <a href="/c/educational-toys/afk">Educational Toys</a>
                                            </li>
                                            <li>
                                                <a href="/c/games/afc">Games</a>
                                            </li>
                                            <li>
                                                <a href="/c/pretend-play/afm">Pretend Play</a>
                                            </li>
                                            <li>
                                                <a href="/c/plush-toys/afl">Plush Toys</a>
                                            </li>
                                            <li>
                                                <a href="/c/baby-toddler-toys/afa">
                                                    Baby & Toddler Toys
                        </a>
                                            </li>
                                            <li>
                                                <a href="/c/building-blocks/afe">Building Blocks</a>
                                            </li>
                                            <li>
                                                <a href="/c/arts-crafts/afb">Arts & Crafts</a>
                                            </li>
                                            <li>
                                                <a href="/c/sport-outdoor-toys/afn">
                                                    Sport & Outdoor Toys
                        </a>
                                            </li>
                                            <li>
                                                <a href="/c/dolls-action-figures/aff">
                                                    Dolls & Action Figures
                        </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="/c/baby-gear/ab"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            BABY GEAR
                    </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: "10px",
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="/c/essentials/aba">Essentials</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nav-item nav-link">
                            <a
                                href="/h/health & beauty"
                                role="button"
                                aria-expanded="false"
                                aria-controls="fashionSubMenu"
                                aria-label="Category Name"
                            >
                                HEALTH & BEAUTY
              </a>
                            <div
                                className="drop-content p-5 text-left collapse"
                                style={{
                                    backgroundColor: "#626262"
                                }}
                            >
                                <div
                                    style={{
                                        display: "grid",
                                        gridAutoFlow: "column",
                                        justifyContent: "center",
                                        fontSize: "1.1rem"
                                    }}
                                >
                                    <div>
                                        <a
                                            href="/c/toiletries/hc"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            TOILETRIES
                    </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: "10px",
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="/c/mens/hcb">Mens</a>
                                            </li>
                                            <li>
                                                <a href="/c/foot-care/hcl">Foot Care</a>
                                            </li>
                                            <li>
                                                <a href="/c/bath-body/hca">Bath & Body</a>
                                            </li>
                                            <li>
                                                <a href="/c/hand-nail-care/hcd">Hand & Nail Care</a>
                                            </li>
                                            <li>
                                                <a href="/c/mens-skincare/hch">Men's Skincare</a>
                                            </li>
                                            <li>
                                                <a href="/c/skin-care/hcj">Skin Care</a>
                                            </li>
                                            <li>
                                                <a href="/c/suncare/hck">Suncare</a>
                                            </li>
                                            <li>
                                                <a href="/c/oral-care/hcf">Oral Care</a>
                                            </li>
                                            <li>
                                                <a href="/c/shaving-grooming/hcg">Shaving & Grooming</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="/c/fragrances/ha"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            FRAGRANCES
                    </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: "10px",
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="/c/men/haa">Men</a>
                                            </li>
                                            <li>
                                                <a href="/c/aromatherapy/had">Aromatherapy</a>
                                            </li>
                                            <li>
                                                <a href="/c/unisex/hac">Unisex</a>
                                            </li>
                                            <li>
                                                <a href="/c/women/hab">Women</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="/c/makeup/hb"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            MAKEUP
                    </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: "10px",
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="/c/lips/hbd">Lips</a>
                                            </li>
                                            <li>
                                                <a href="/c/body/hba">Body</a>
                                            </li>
                                            <li>
                                                <a href="/c/tools/hbe">Tools</a>
                                            </li>
                                            <li>
                                                <a href="/c/eyes/hbb">Eyes</a>
                                            </li>
                                            <li>
                                                <a href="/c/face/hbc">Face</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="/c/hair-care/hd"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            HAIR CARE
                    </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: "10px",
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="/c/styling-products/hda">Styling Products</a>
                                            </li>
                                            <li>
                                                <a href="/c/shampoo-conditioners/hdh">
                                                    Shampoo & Conditioners
                        </a>
                                            </li>
                                            <li>
                                                <a href="/c/treatments/hdi">Treatments</a>
                                            </li>
                                            <li>
                                                <a href="/c/kids/hdf">Kids</a>
                                            </li>
                                            <li>
                                                <a href="/c/extensions-wigs/hdj">Extensions & Wigs</a>
                                            </li>
                                            <li>
                                                <a href="/c/mens/hde">Mens</a>
                                            </li>
                                            <li>
                                                <a href="/c/accessories-tools/hdd">
                                                    Accessories & Tools
                        </a>
                                            </li>
                                            <li>
                                                <a href="/c/hair-colouring/hdc">Hair Colouring</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="/c/health-personal-care/he"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            HEALTH & PERSONAL CARE
                    </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: "10px",
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="/c/health-care/hea">Health Care</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nav-item nav-link">
                            <a
                                href="/m/household"
                                role="button"
                                aria-expanded="false"
                                aria-controls="fashionSubMenu"
                                aria-label="Category Name"
                            >
                                HOUSEHOLD
              </a>
                            <div
                                className="drop-content p-5 text-left collapse"
                                style={{
                                    backgroundColor: "#626262"
                                }}
                            >
                                <div
                                    style={{
                                        display: "grid",
                                        gridAutoFlow: "column",
                                        justifyContent: "center",
                                        fontSize: "1.1rem"
                                    }}
                                >
                                    <div>
                                        <a
                                            href="/c/household-cleaning/ma"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            HOUSEHOLD CLEANING
                    </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: "10px",
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="/c/cleaning-products/maa">Cleaning Products</a>
                                            </li>
                                            <li>
                                                <a href="/c/kitchen/mag">Kitchen</a>
                                            </li>
                                            <li>
                                                <a href="/c/furniture-upholstery/mae">
                                                    Furniture & Upholstery
                        </a>
                                            </li>
                                            <li>
                                                <a href="/c/insect-repellant/maf">Insect Repellant</a>
                                            </li>
                                            <li>
                                                <a href="/c/bathroom/mac">Bathroom</a>
                                            </li>
                                            <li>
                                                <a href="/c/shoe-care/mai">Shoe Care</a>
                                            </li>
                                            <li>
                                                <a href="/c/laundry/mah">Laundry</a>
                                            </li>
                                            <li>
                                                <a href="/c/floors-carpet/mad">Floors & Carpet</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="/c/general-goods/mb"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            GENERAL GOODS
                    </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: "10px",
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="/c/general-goods/mba">General Goods</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="/c/pantry/md"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            PANTRY
                    </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: "10px",
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="/c/condiments-sauces/mdb">
                                                    Condiments & Sauces
                        </a>
                                            </li>
                                            <li>
                                                <a href="/c/drinks/mdc">Drinks</a>
                                            </li>
                                            <li>
                                                <a href="/c/snacks-cereals/mde">Snacks & Cereals</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nav-item nav-link">
                            <a
                                href="/l/homeware"
                                role="button"
                                aria-expanded="false"
                                aria-controls="fashionSubMenu"
                                aria-label="Category Name"
                            >
                                HOMEWARE
              </a>
                            <div
                                className="drop-content p-5 text-left collapse"
                                style={{
                                    backgroundColor: "#626262"
                                }}
                            >
                                <div
                                    style={{
                                        display: "grid",
                                        gridAutoFlow: "column",
                                        justifyContent: "center",
                                        fontSize: "1.1rem"
                                    }}
                                >
                                    <div>
                                        <a
                                            href="/c/bed-bath/la"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            BED & BATH
                    </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: "10px",
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="/c/bathroom-accessories/laa">
                                                    Bathroom Accessories
                        </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="/c/luggage-travel/lf"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            LUGGAGE & TRAVEL
                    </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: "10px",
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="/c/travel-accessories/lfb">
                                                    Travel Accessories
                        </a>
                                            </li>
                                            <li>
                                                <a href="/c/suitcases-sets/lfc">Suitcases & Sets</a>
                                            </li>
                                            <li>
                                                <a href="/c/bags/lfa">Bags</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="/c/kitchen/ld"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            KITCHEN
                    </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: "10px",
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="/c/bakeware/lda">Bakeware</a>
                                            </li>
                                            <li>
                                                <a href="/c/coffee-tea/ldb">Coffee & Tea</a>
                                            </li>
                                            <li>
                                                <a href="/c/cookware/ldc">Cookware</a>
                                            </li>
                                            <li>
                                                <a href="/c/small-appliances-accessories/ldd">
                                                    Small Appliances & Accessories
                        </a>
                                            </li>
                                            <li>
                                                <a href="/c/food-preparation/ldh">Food Preparation</a>
                                            </li>
                                            <li>
                                                <a href="/c/organisation-storage/lde">
                                                    Organisation & Storage
                        </a>
                                            </li>
                                            <li>
                                                <a href="/c/utensils-tools/ldf">Utensils & Tools</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="/c/dining-entertaining/le"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            DINING & ENTERTAINING
                    </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: "10px",
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="/c/cutlery/leb">Cutlery</a>
                                            </li>
                                            <li>
                                                <a href="/c/barware/lea">Barware</a>
                                            </li>
                                            <li>
                                                <a href="/c/serveware/lef">Serveware</a>
                                            </li>
                                            <li>
                                                <a href="/c/drinkware/lee">Drinkware</a>
                                            </li>
                                            <li>
                                                <a href="/c/tabletop-accessories/lei">
                                                    Tabletop Accessories
                        </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a
                                            href="/c/home-decor/lb"
                                            style={{
                                                fontWeight: 800,
                                                fontSize: "1.3rem",
                                                color: "rgb(42, 183, 164)"
                                            }}
                                        >
                                            HOME DECOR
                    </a>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                marginTop: "10px",
                                                color: "white"
                                            }}
                                        >
                                            <li>
                                                <a href="/c/home-decor-items/lbd">Home Decor Items</a>
                                            </li>
                                            <li>
                                                <a href="/c/picture-frames/lbe">Picture Frames</a>
                                            </li>
                                            <li>
                                                <a href="/c/candles-home-fragrances/lbb">
                                                    Candles & Home Fragrances
                        </a>
                                            </li>
                                            <li>
                                                <a href="/c/kids-decor-bedding/lbg">
                                                    Kids Decor & Bedding
                        </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nav-item nav-link">
                            <a href="/brands">BRANDS</a>
                        </div>
                        <div className="nav-item nav-link promo">
                            <a
                                data-toggle="collapse"
                                href="#promoSubMenu"
                                role="button"
                                aria-expanded="false"
                                aria-controls="promoSubMenu"
                                aria-label="Offers"
                            >
                                OFFERS
              </a>
                            <div
                                className="promo-drop-content p-5 text-left collapse"
                                id="promoSubMenu"
                                style={{
                                    cursor: "default"
                                }}
                            >
                                <div className="row mt-4 mb-2">
                                    <div className="col-12 col-sm-3 ml-0 ml-sm-5">
                                        <a
                                            href="javascript:;"
                                            className="font-weight-bold text-white"
                                            role="button"
                                            aria-expanded="false"
                                            style={{
                                                cursor: "default"
                                            }}
                                            aria-controls="p1"
                                            aria-label="Quick Links"
                                        >
                                            QUICK LINKS
                    </a>
                                        <ul className="list-unstyled mt-4 collapse" id="p1">
                                            <li>
                                                <a className="text-white" href="/brands">
                                                    Shop by Brand
                        </a>
                                            </li>
                                            <li>
                                                <a className="text-white" href="/search?promo=1">
                                                    Featured
                        </a>
                                            </li>
                                            <li>
                                                <a className="text-white" href="/search?promo=2">
                                                    Everyday Essentials
                        </a>
                                            </li>
                                            <li>
                                                <a className="text-white" href="/search?promo=3">
                                                    Member Exclusive
                        </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-12 col-sm-3">
                                        <a
                                            href="javascript:;"
                                            className="font-weight-bold text-white"
                                            role="button"
                                            aria-expanded="false"
                                            style={{
                                                cursor: "default"
                                            }}
                                            aria-controls="p3"
                                            aria-label="New In"
                                        >
                                            NEW IN
                    </a>
                                        <ul className="list-unstyled mt-4 collapse" id="p3">
                                            <li>
                                                <a
                                                    className="text-white"
                                                    href="/c/womens/fb?sort=Newest"
                                                >
                                                    New In Women's Fashion
                        </a>
                                            </li>
                                            <li>
                                                <a className="text-white" href="/c/mens/fc?sort=Newest">
                                                    New In Men's Fashion
                        </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="text-white"
                                                    href="/c/homeware/l?sort=Newest"
                                                >
                                                    New In Home
                        </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="text-white"
                                                    href="/c/watches/fad?sort=Newest"
                                                >
                                                    New In Watches
                        </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="text-white"
                                                    href="/c/fragrances/ha?sort=Newest"
                                                >
                                                    New In Fragrances
                        </a>
                                            </li>
                                            <li>
                                                <a className="text-white" href="/c/toys/af?sort=Newest">
                                                    New In Toys
                        </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navbar;
