import React from 'react';
import profileImg from './images/IMG_1269.jpeg'

export default function Profile() {
    return(
        <div className='timesProfile flexColumn'>
            <img src={profileImg} alt='Me'/>
            <div className='summary topBorder'>
                <p><label className='theFirst'>L</label>orem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, nulla velit dolorem iusto quisquam sequi iste tempora. Deleniti labore placeat illo eos molestiae velit, beatae cum, nostrum maiores rerum repellat neque, asperiores exercitationem magnam officia quam consequuntur doloremque necessitatibus ut quos excepturi iure odit laborum minima. dolores </p>
                <p>Velit error reiciendis ut possimus laborum sit porro dolor dolorem cumque praesentium nesciunt adipisci provident ex reprehenderit a omnis iste non hic deleniti totam eveniet consectetur, natus similique? Reprehenderit mollitia voluptas unde adipisci distinctio repellat officiis, praesentium, placeat, incidunt saepe dolorem repellendus illo magni possimus assumenda. Quos cupiditate suscipit a, dolores </p>
            </div>
        </div>


    );
}
