require 'spec_helper.rb'

feature "Looking up recipes", js: true do
  scenario "finding recipes" do
    visit '/'
    fill_in "keywords", with: "baked"
    click_on "Search"

    expect(page).to have_content("Baked Potato")
    expect(page).to have_content("Baked Brussel Sprouts")
    expect(page).to_not have_content("Potatoes au Gratin")
  end
end