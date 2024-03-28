export interface ILyricsBySearch {
  hits: [
    {
      result: {
        _type: string;
        api_path: string;
        artist_names: string;
        full_title: string;
        header_image_url: string | undefined;
        id: number;
        lyrics_owner_id: number;
        lyrics_state: string;
        lyrics_updated_at: number;
        path: string;
        relationships_index_url: string;
        song_art_image_url: string;
        stats: {
          unreviewed_annotations: number;
          hot: boolean;
          pageviews: number;
        };
        title: string;
        title_with_featured: string;
        updated_by_human_at: number;
        url: string;
        featured_artists: [];
        primary_artist: {
          _type: string;
          api_path: string;
          header_image_url: string;
          id: number;
          image_url: string;
          index_character: string;
          is_meme_verified: boolean;
          is_verified: boolean;
          name: string;
          slug: string;
          url: string;
          iq: number;
        };
      };
    }
  ];
}

export interface ISongsText {
  lyrics: {
    _type: string;
    api_path: string;
    lyrics: {
      body: {
        html: string;
      };
    };
    path: string;
    song_id: number;
    tracking_data: {
      song_id: number;
      title: string;
      primary_artist: string;
      primary_artist_id: number;
      primary_album: string;
      primary_album_id: number;
      tag: string;
      primary_tag: string;
      primary_tag_id: number;
      music?: boolean;
      annotatable_type: string;
      annotatable_id: number;
      featured_video: boolean;
      has_verified_callout: boolean;
      has_featured_annotation: boolean;
      created_at: string;
      created_month: string;
      created_year: number;
      song_tier: string;
      has_recirculated_articles: boolean;
      lyrics_language: string;
      has_apple_match: boolean;
      release_date: string;
      nrm_tier: number;
      nrm_target_date: string;
      has_description: boolean;
      has_youtube_url: boolean;
      comment_count: number;
      hot: boolean;
      has_recommendations: boolean;
      has_stubhub_artist: boolean;
      has_stubhub_link: boolean;
      translation: boolean;
      recommendation_strategy: string;
      web_interstitial_variant: string;
      platform_variant: string;
    };
  };
}
